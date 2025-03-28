import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // title: "InterviewAce | AI Interview Practice",
  // description: "Master your interview skills with InterviewAce. Get personalized AI-powered mock interviews, real-time feedback, and expert guidance to ace your next job interview.",
  // Alternative options:
  title: "InterviewPro | Smart Interview Preparation",
  description:
    "Practice interviews smarter with InterviewPro. AI-driven mock interviews, instant feedback, and professional guidance to boost your interview confidence.",

  // title: "MockMaster | AI Interview Training"
  // description: "Elevate your interview game with MockMaster. Personalized AI interview simulations, detailed feedback, and expert coaching for interview success."

  // title: "CareerPrep | AI Interview Coach"
  // description: "Transform your interview skills with CareerPrep. Advanced AI mock interviews, personalized feedback, and professional development tools to help you land your dream job."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${monaSans.className} antialiased pattern`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
