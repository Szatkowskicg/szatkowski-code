import { useState } from "react";
import { motion } from "motion/react";

export default function ContactTerminal() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    phone: "",
  });

  const handleNext = () => setStep((prev) => prev + 1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!\n" + JSON.stringify(formData, null, 2));
    setStep(0);
    setFormData({ email: "", message: "", phone: "" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-black text-green-400 font-mono p-6 rounded-lg shadow-lg max-w-xl mx-auto mt-10"
    >
      <div className="mb-4">
        <p>$ Welcome to my contact terminal</p>
        {step === 0 && (
          <p className="animate-pulse">
            $ If you want to write to me, just press Enter
          </p>
        )}
      </div>

      {step === 1 && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-green-400 mb-1">$ Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-black border border-green-400 text-green-400 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-green-400 mb-1">$ Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-black border border-green-400 text-green-400 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Write your message here..."
              required
            />
          </div>

          <div>
            <label className="block text-green-400 mb-1">
              $ Phone (optional):
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-black border border-green-400 text-green-400 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="+1234567890"
            />
          </div>

          <button
            type="submit"
            className="bg-green-400 text-black px-4 py-2 rounded hover:bg-green-500 transition"
          >
            $ Submit
          </button>
        </form>
      )}

      {step === 0 && (
        <button
          onClick={handleNext}
          className="mt-4 bg-green-400 text-black px-4 py-2 rounded hover:bg-green-500 transition"
        >
          Enter
        </button>
      )}
    </motion.div>
  );
}
