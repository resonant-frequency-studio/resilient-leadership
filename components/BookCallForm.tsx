'use client'

import { useState, FormEvent } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import Input from './Input'
import Select from './Select'
import Textarea from './Textarea'
import Checkbox from './Checkbox'
import Button from './Button'
import Typography from './Typography'
import Link from 'next/link'

interface FormData {
  name: string
  email: string
  topic: string
  message: string
  agreedToTerms: boolean
}

interface FormErrors {
  name?: string
  email?: string
  topic?: string
  message?: string
  agreedToTerms?: string
  submit?: string
}

const topicOptions = [
  { value: 'executive-coaching', label: 'Executive Coaching' },
  { value: 'team-coaching', label: 'Team Coaching' },
  { value: 'change-management', label: 'Change Management' },
  { value: '360-feedback', label: '360° Feedback' },
  { value: 'surveys-assessments', label: 'Surveys & Assessments' },
  { value: 'custom-engagements', label: 'Custom Engagements' },
  { value: 'newsletter-signup', label: 'Newsletter Signup' },
  { value: 'general-inquiry', label: 'General Inquiry' },
]

export default function BookCallForm() {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    topic: '',
    message: '',
    agreedToTerms: false,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Email validation regex - more comprehensive
  const validateEmail = (email: string): boolean => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    return emailRegex.test(email)
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.topic) {
      newErrors.topic = 'Please select a topic'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    if (!formData.agreedToTerms) {
      newErrors.agreedToTerms = 'You must agree to the terms to continue'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Validate individual field on blur
  const validateField = (field: keyof FormData, value: string | boolean) => {
    const newErrors: FormErrors = { ...errors }

    if (field === 'name') {
      if (!(value as string).trim()) {
        newErrors.name = 'Name is required'
      } else {
        delete newErrors.name
      }
    }

    if (field === 'email') {
      const emailValue = (value as string).trim()
      if (!emailValue) {
        newErrors.email = 'Email is required'
      } else if (!validateEmail(emailValue)) {
        newErrors.email = 'Please enter a valid email address'
      } else {
        delete newErrors.email
      }
    }

    setErrors(newErrors)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      // Get reCAPTCHA token
      let recaptchaToken: string | undefined
      if (executeRecaptcha) {
        recaptchaToken = await executeRecaptcha('contact_form')
      }

      // Submit form
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          topic: formData.topic,
          message: formData.message,
          recaptchaToken,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form')
      }

      // Success
      setIsSuccess(true)
      setFormData({
        name: '',
        email: '',
        topic: '',
        message: '',
        agreedToTerms: false,
      })

      // Reset success message after 5 seconds (optional)
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (error) {
      setErrors({
        submit:
          error instanceof Error
            ? error.message
            : 'Failed to submit form. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing (for better UX)
    if (errors[field] && field !== 'email') {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
    // For email, validate as they type (but don't show error until blur)
    if (
      field === 'email' &&
      (value as string).trim() &&
      validateEmail((value as string).trim())
    ) {
      setErrors(prev => ({ ...prev, email: undefined }))
    }
  }

  const handleBlur = (field: keyof FormData) => {
    if (field === 'name' || field === 'email') {
      validateField(field, formData[field])
    }
  }

  // Check if required fields are valid for enabling submit button
  const isFormValid = (): boolean => {
    const nameValid = formData.name.trim().length > 0
    const emailValid =
      formData.email.trim().length > 0 && validateEmail(formData.email.trim())
    const checkboxChecked = formData.agreedToTerms

    return nameValid && emailValid && checkboxChecked
  }

  if (isSuccess) {
    return (
      <div className="w-full p-8 bg-secondary rounded-2xl">
        <Typography variant="heading-4" as="h3" className="mb-4">
          Thank you!
        </Typography>
        <Typography variant="body" as="p">
          Your message has been sent successfully. We&apos;ll get back to you
          soon.
        </Typography>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6">
      <Typography variant="body" as="p" className="text-foreground-dark/80">
        Share a bit about what brings you here so we can prepare thoughtfully
        for the conversation. What you share helps us understand your context
        and make the most of our time together.
      </Typography>
      <Input
        label="NAME *"
        type="text"
        value={formData.name}
        onChange={e => handleChange('name', e.target.value)}
        onBlur={() => handleBlur('name')}
        error={errors.name}
        required
      />

      <Input
        label="EMAIL *"
        type="email"
        value={formData.email}
        onChange={e => handleChange('email', e.target.value)}
        onBlur={() => handleBlur('email')}
        error={errors.email}
        required
      />

      <Select
        label="WHAT BRINGS YOU HERE?"
        placeholder="Topic"
        value={formData.topic}
        onChange={e => handleChange('topic', e.target.value)}
        options={topicOptions}
        error={errors.topic}
        required
      />

      <Textarea
        label="MESSAGE"
        value={formData.message}
        onChange={e => handleChange('message', e.target.value)}
        placeholder="A few words about what you are navigating, optional"
        error={errors.message}
        required
        rows={5}
      />

      <Checkbox
        checked={formData.agreedToTerms}
        onChange={e => handleChange('agreedToTerms', e.target.checked)}
        error={errors.agreedToTerms}
        label={
          <span>
            By sending this form, I agree to the{' '}
            <Link
              href="/terms"
              className="underline hover:no-underline"
              target="_blank"
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              href="/privacy"
              className="underline hover:no-underline"
              target="_blank"
            >
              Privacy Policy
            </Link>
            . *
          </span>
        }
      />

      {errors.submit && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <Typography variant="body-small" as="p" className="text-red-600">
            {errors.submit}
          </Typography>
        </div>
      )}

      <Typography
        variant="body-small"
        as="p"
        className="text-foreground-dark/70"
      >
        * Required fields
      </Typography>
      <div className="flex justify-end">
        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={isSubmitting || !isFormValid()}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </div>

      {/* Custom reCAPTCHA badge */}
      <div className="mt-6 pt-6 border-t border-foreground-dark/10">
        <div className="flex items-center justify-start gap-2 text-xs text-foreground-dark/60">
          <span>Protected by reCAPTCHA</span>
          <Link
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            Privacy
          </Link>
          <span>-</span>
          <Link
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            Terms
          </Link>
        </div>
      </div>
    </form>
  )
}
