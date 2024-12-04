import { z } from 'zod'

const createLecture = z.object({
  body: z.object({
    title: z
      .string({
        required_error: 'Title is required',
      })
      .min(5)
      .max(255),
    description: z.string().optional(),
    videoUrl: z.string().min(5).max(255).optional(),
    course_id: z.string({
      required_error: 'Course Id is required',
    }),
    milestone_id: z.string().optional(),
  }),
})

const updateLecture = z.object({
  body: z.object({
    title: z.string().min(5).max(255).optional(),
    description: z.string().optional(),
    videoUrl: z.string().min(5).max(255).optional(),
    course_id: z.string().optional(),
    milestone_id: z.string().optional(),
  }),
})

export const LecturesValidation = {
  createLecture,
  updateLecture,
}
