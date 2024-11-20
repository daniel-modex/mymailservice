import { serve } from "@novu/framework/next";
import { welcomeOnboardingEmail } from "../../novu/workflows";
import { welcomeOtp } from "../../novu/workflows/otp";

// the workflows collection can hold as many workflow definitions as you need
export const { GET, POST, OPTIONS } = serve({
  workflows: [welcomeOnboardingEmail,welcomeOtp],
});
