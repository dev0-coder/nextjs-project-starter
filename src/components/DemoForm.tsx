"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { toast } from 'sonner'

const demoFormSchema = z.object({
  companyName: z.string().min(2, 'Company name must be at least 2 characters'),
  contactName: z.string().min(2, 'Contact name must be at least 2 characters'),
  role: z.string().min(1, 'Please select your role'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  timezone: z.string().min(1, 'Please select your timezone'),
})

type DemoFormData = z.infer<typeof demoFormSchema>

interface DemoFormProps {
  onClose: () => void
}

const DemoForm = ({ onClose }: DemoFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<DemoFormData>({
    resolver: zodResolver(demoFormSchema),
  })

  const onSubmit = async (data: DemoFormData) => {
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Mock successful submission
      toast.success('Demo scheduled successfully! Check your email for confirmation.')
      
      // Send autoresponder email (simulated)
      console.log('Autoresponder email sent:', {
        to: data.email,
        subject: 'Demo Confirmed — Solar AI Agent',
        body: `Hi ${data.contactName}, thanks — demo scheduled. Aap demo ke liye ready ho? Hum 10-minute me system se kuch real leads fetch karke dikhayenge.`
      })
      
      onClose()
    } catch (error) {
      toast.error('Failed to schedule demo. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const roles = [
    'Owner/Founder',
    'Sales Manager',
    'Marketing Manager',
    'Operations Manager',
    'Business Development',
    'Other'
  ]

  const timezones = [
    'Asia/Kolkata (IST)',
    'America/New_York (EST)',
    'America/Los_Angeles (PST)',
    'Europe/London (GMT)',
    'Australia/Sydney (AEST)',
    'Other'
  ]

  return (
    <div className="space-y-6">
      <DialogHeader>
        <DialogTitle className="text-2xl">Book a 15-min Live Demo</DialogTitle>
        <DialogDescription>
          Get a personalized demo of our Solar AI Agent system. We'll show you real leads 
          and demonstrate the complete automation workflow.
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Company Name */}
        <div className="space-y-2">
          <Label htmlFor="companyName">Company Name *</Label>
          <Input
            id="companyName"
            {...register('companyName')}
            placeholder="Your Solar Company"
            className={errors.companyName ? 'border-red-500' : ''}
          />
          {errors.companyName && (
            <p className="text-sm text-red-500">{errors.companyName.message}</p>
          )}
        </div>

        {/* Contact Name */}
        <div className="space-y-2">
          <Label htmlFor="contactName">Contact Name *</Label>
          <Input
            id="contactName"
            {...register('contactName')}
            placeholder="Your Full Name"
            className={errors.contactName ? 'border-red-500' : ''}
          />
          {errors.contactName && (
            <p className="text-sm text-red-500">{errors.contactName.message}</p>
          )}
        </div>

        {/* Role */}
        <div className="space-y-2">
          <Label htmlFor="role">Role *</Label>
          <Select onValueChange={(value) => setValue('role', value)}>
            <SelectTrigger className={errors.role ? 'border-red-500' : ''}>
              <SelectValue placeholder="Select your role" />
            </SelectTrigger>
            <SelectContent>
              {roles.map((role) => (
                <SelectItem key={role} value={role}>
                  {role}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.role && (
            <p className="text-sm text-red-500">{errors.role.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            placeholder="your@email.com"
            className={errors.email ? 'border-red-500' : ''}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone">Phone *</Label>
          <Input
            id="phone"
            {...register('phone')}
            placeholder="+1 (555) 123-4567"
            className={errors.phone ? 'border-red-500' : ''}
          />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>

        {/* Timezone */}
        <div className="space-y-2">
          <Label htmlFor="timezone">Timezone *</Label>
          <Select onValueChange={(value) => setValue('timezone', value)}>
            <SelectTrigger className={errors.timezone ? 'border-red-500' : ''}>
              <SelectValue placeholder="Select your timezone" />
            </SelectTrigger>
            <SelectContent>
              {timezones.map((timezone) => (
                <SelectItem key={timezone} value={timezone}>
                  {timezone}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.timezone && (
            <p className="text-sm text-red-500">{errors.timezone.message}</p>
          )}
        </div>

        {/* Consent Checkbox */}
        <div className="flex items-start space-x-2 pt-4">
          <input
            type="checkbox"
            id="consent"
            required
            className="mt-1"
          />
          <Label htmlFor="consent" className="text-sm text-muted-foreground">
            I consent to recorded calls and agree to receive demo-related communications. 
            By submitting, I agree to the Privacy Policy and Terms of Service.
          </Label>
        </div>

        {/* Submit Button */}
        <Button 
          type="submit" 
          className="w-full" 
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Scheduling Demo...' : 'Schedule Demo'}
        </Button>
      </form>

      {/* Additional Info */}
      <div className="text-center text-sm text-muted-foreground border-t pt-4">
        <p>
          <strong>What to expect:</strong> 15-minute personalized demo showing real leads 
          from your region, live AI calling demonstration, and ROI calculation for your business.
        </p>
      </div>
    </div>
  )
}

export default DemoForm
