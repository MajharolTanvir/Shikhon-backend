import { z } from 'zod'

const createCourse = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    description: z.string({
      required_error: 'Description is required',
    }),
    promo_video: z.string().optional(),
    thumbnail: z.string({
      required_error: 'Thumbnail is required',
    }),
    batch_number: z.string({
      required_error: 'Batch number is required',
    }),
    main_price: z.number({
      required_error: 'Main price is required',
    }),
    promo_code: z.string().optional(),
    promo_description: z.string().optional(),
    discount_percentage: z.number().optional(),
    lesson_type: z.string({
      required_error: 'Lesson type is required',
    }),
    startDate: z.string({
      required_error: 'Start date is required',
    }),
    endDate: z.string({
      required_error: 'End date is required',
    }),
    enrollmentStartDate: z.string({
      required_error: 'Enrollment start date is required',
    }),
    enrollmentEndDate: z.string({
      required_error: 'Enrollment end date is required',
    }),
  }),
})

const updateCourse = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    promo_video: z.string().optional(),
    thumbnail: z.string().optional(),
    batch_number: z.string().optional(),
    main_price: z.number().optional(),
    promo_code: z.string().optional(),
    promo_description: z.string().optional(),
    discount_percentage: z.number().optional(),
    lesson_type: z.string().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    enrollmentStartDate: z.string().optional(),
    enrollmentEndDate: z.string().optional(),
  }),
})

export const CoursesValidation = {
  createCourse,
  updateCourse,
}
