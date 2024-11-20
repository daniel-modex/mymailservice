import { workflow } from "@novu/framework";
import { renderEmail } from "../../emails/novu-onboarding-email";
import { emailControlSchema, payloadSchema, zodSmsControlSchema } from "./schemas";

// export const welcomeOnboardingEmail = workflow(
//   "welcome-onboarding-email",
//   async ({ step, payload }) => {
//     await step.email(
//       "send-email",
//       async (controls) => {
//         return {
//           subject: controls.subject,
//           body: renderEmail(controls, payload),
//         };
//       },
//       {
//         controlSchema: emailControlSchema,
//       },
//     );
//     await step.sms('send-sms', async (controls) => {
//       return {
//         subject: controls.smsSubject,
//         body: `You have a new notification on QuickAccess. Please login to see the details` ,
//       };
//     },
//     {
//       controlSchema: zodSmsControlSchema
//     });
//   },
  
//   {
//     payloadSchema,
//   },
// );


export const welcomeOtp = workflow(
  "welcomOtp",
  async ({ step, payload }) => {
    await step.email(
      "send-email",
      async (controls) => {
        return {
          subject: controls.subject,
          body: renderEmail(controls, payload),
        };
      },
      {
        controlSchema: emailControlSchema,
      },
    );
    await step.sms('send-sms', async (controls) => {
      return {
        subject: controls.smsSubject,
        body: `Your verification code from QuickAccess is ${payload.otp}` ,
      };
    },
    {
      controlSchema: zodSmsControlSchema
    });
  },
  
  {
    payloadSchema,
  },
);


