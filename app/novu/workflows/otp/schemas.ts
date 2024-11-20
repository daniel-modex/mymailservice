import { z } from "zod";

// Learn more about zod at the official website: https://zod.dev/
export const payloadSchema = z.object({
  
    otp:z.string().default("0000")
});

// export const payloadSchemaOTP = z.object({
//   otp: z
//     .string()
    
  
// });

export const zodSmsControlSchema = z.object({
  smsSubject: z.string().default("You received a Slack OTP")
});

export const emailControlSchema = z.object({
  subject: z.string().default("A Successful Test on Novu!"),
  showHeader: z.boolean().default(true),
  components: z
    .array(
      z.object({
        type: z.enum(["heading", "text", "button", "code", "users"]),
        text: z.string().default(""),
        align: z.enum(["left", "center", "right"]).default("left"),
      }),
    )
    .default([
      {
        type: "heading",
        text: "Welcome to Novu",
        align: "center",
      },
      {
        type: "text",
        text: "Congratulations on receiving your first notification email from Novu! Join the hundreds of thousands of developers worldwide who use Novu to build notification platforms for their products.",
        align: "left",
      },
      {
        type: "users",
        align: "center",
        text: "",
      },
      {
        type: "text",
        text: "Ready to get started? Click on the button below, and you will see first-hand how easily you can edit this email content.",
        align: "left",
      },
      {
        type: "button",
        text: "Edit Email",
        align: "center",
      },
    ]),
});
