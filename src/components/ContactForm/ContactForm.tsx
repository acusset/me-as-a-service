import { Input } from "@/components/ui/input";
import { SubmitButton } from "./SubmitButton";
import { addContactEntryToNotion } from "./actions";

export default function ContactForm() {
  return (
    <div id="contact">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-alabaster sm:text-4xl">
            Get in Touch{" "}
            <span className="block text-xanthous">
              Let&apos;s create something amazing.
            </span>
          </h2>
        </div>
        <div className="mx-auto mt-8 max-w-3xl sm:mt-12">
          <div
            className={`
            bg-eerie border-xanthous rounded-2xl border-2
            p-6 md:p-8
            transition-all duration-300
            hover:bg-eerie/80 hover:shadow-lg hover:shadow-tekhelet/20
          `}
          >
            <ContactFormContent />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactFormContent() {
  const inputClasses = `
    w-full bg-eerie/60 border-2 border-alabaster/10 rounded-lg px-4 py-3 
    text-alabaster text-base placeholder:text-alabaster/30 
    transition-all duration-300
    focus:border-tekhelet focus:ring-2 focus:ring-tekhelet/20 focus:bg-eerie/80
    hover:border-alabaster/20
  `;

  return (
    <form className="space-y-6" action={addContactEntryToNotion}>
      <div>
        <label
          htmlFor="name"
          className="block text-lg font-medium text-alabaster mb-2"
        >
          Name <span className="text-tekhelet">*</span>
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          maxLength={100}
          placeholder="Your name"
          className={inputClasses}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-lg font-medium text-alabaster mb-2"
        >
          Email <span className="text-tekhelet">*</span>
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          maxLength={254}
          placeholder="you@example.com"
          className={inputClasses}
        />
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-lg font-medium text-alabaster mb-2"
        >
          Company <span className="text-alabaster/50">(Optional)</span>
        </label>
        <Input
          id="company"
          name="company"
          type="text"
          maxLength={100}
          placeholder="Your company"
          className={inputClasses}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-lg font-medium text-alabaster mb-2"
        >
          Message <span className="text-tekhelet">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={1000}
          rows={3}
          placeholder="Tell me about your project..."
          className={`${inputClasses} resize-none min-h-[120px]`}
        />
      </div>

      <SubmitButton />
    </form>
  );
}
