import { z } from 'zod'

const createMilestone = z.object({
  body: z.object({
    title: z
      .string({
        required_error: 'Title is required',
      })
      .min(3)
      .max(255),
    status: z
      .string({
        required_error: 'Status is required',
      })
      .min(3)
      .max(255),
    course_id: z
      .string({
        required_error: 'Course ID is required',
      })
      .min(3)
      .max(255),
  }),
})

const updateMilestone = z.object({
  body: z.object({
    title: z.string().min(3).max(255).optional(),
    status: z.string().min(3).max(255).optional(),
    course_id: z.string().min(3).max(255).optional(),
  }),
})

export const MilestonesValidation = {
  createMilestone,
  updateMilestone,
}
