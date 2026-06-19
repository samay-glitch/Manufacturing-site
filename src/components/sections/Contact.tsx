import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Clock, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

type FormData = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  requirement: string;
};

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form data:', data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  const inputClasses = (error: any) => `
    w-full bg-brand-navy/50 border rounded-lg px-4 pt-6 pb-2 text-white outline-none transition-all duration-300
    ${error ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/50' : 'border-white/10 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/50'}
  `;

  const labelClasses = (error: any) => `
    absolute left-4 top-4 text-brand-gray/50 transition-all duration-300 pointer-events-none text-sm
    peer-focus:text-xs peer-focus:top-2 peer-focus:${error ? 'text-red-500' : 'text-brand-orange'}
    peer-valid:text-xs peer-valid:top-2 peer-valid:text-brand-gray/80
  `;

  return (
    <section id="contact" className="py-24 bg-brand-steel border-t border-white/5 relative overflow-hidden">
      <div className="container px-6 mx-auto relative z-10">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 mb-4 text-sm font-semibold tracking-wider uppercase border rounded border-brand-orange/30 text-brand-orange bg-brand-orange/10"
          >
            Get In Touch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-white md:text-5xl"
          >
            Request A <span className="text-brand-orange">Quote</span>
          </motion.h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-5 max-w-6xl mx-auto">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="flex items-start gap-4 p-6 rounded-xl bg-brand-navy border border-white/5">
              <div className="p-3 rounded-lg bg-brand-orange/10 text-brand-orange mt-1">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Our Location</h4>
                <p className="text-brand-gray/70 leading-relaxed">
                  Industrial Area, Phase 1<br />
                  Your City, State 123456
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-xl bg-brand-navy border border-white/5">
              <div className="p-3 rounded-lg bg-brand-cyan/10 text-brand-cyan mt-1">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Contact Info</h4>
                <p className="text-brand-gray/70 leading-relaxed">
                  Phone: +91 98765 43210<br />
                  Email: contact@titanengineering.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-xl bg-brand-navy border border-white/5">
              <div className="p-3 rounded-lg bg-white/10 text-white mt-1">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Working Hours</h4>
                <p className="text-brand-gray/70 leading-relaxed">
                  Monday – Saturday<br />
                  9:00 AM – 6:00 PM
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-brand-navy rounded-2xl p-8 md:p-10 border border-white/10 relative overflow-hidden shadow-2xl"
          >
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 z-20 bg-brand-navy flex flex-col items-center justify-center p-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                    className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6"
                  >
                    <motion.div
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <CheckCircle2 size={48} />
                    </motion.div>
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white mb-2">Quote Requested!</h3>
                  <p className="text-brand-gray/70 max-w-sm">
                    Thank you for your interest. Our engineering team will review your requirements and get back to you within 24 hours.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    id="fullName"
                    className={`${inputClasses(errors.fullName)} peer`}
                    {...register("fullName", { required: "Full name is required" })}
                    required
                  />
                  <label htmlFor="fullName" className={labelClasses(errors.fullName)}>
                    Full Name
                  </label>
                  {errors.fullName && (
                    <span className="absolute top-4 right-4 text-red-500"><AlertCircle size={18} /></span>
                  )}
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="companyName"
                    className={`${inputClasses(errors.companyName)} peer`}
                    {...register("companyName", { required: "Company name is required" })}
                    required
                  />
                  <label htmlFor="companyName" className={labelClasses(errors.companyName)}>
                    Company Name
                  </label>
                  {errors.companyName && (
                    <span className="absolute top-4 right-4 text-red-500"><AlertCircle size={18} /></span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className={`${inputClasses(errors.email)} peer`}
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    required
                  />
                  <label htmlFor="email" className={labelClasses(errors.email)}>
                    Email Address
                  </label>
                  {errors.email && (
                    <span className="absolute top-4 right-4 text-red-500"><AlertCircle size={18} /></span>
                  )}
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    className={`${inputClasses(errors.phone)} peer`}
                    {...register("phone", { required: "Phone number is required" })}
                    required
                  />
                  <label htmlFor="phone" className={labelClasses(errors.phone)}>
                    Phone Number
                  </label>
                  {errors.phone && (
                    <span className="absolute top-4 right-4 text-red-500"><AlertCircle size={18} /></span>
                  )}
                </div>
              </div>

              <div className="relative">
                <textarea
                  id="requirement"
                  rows={5}
                  className={`${inputClasses(errors.requirement)} peer resize-none`}
                  {...register("requirement", { required: "Please provide your requirements" })}
                  required
                ></textarea>
                <label htmlFor="requirement" className={labelClasses(errors.requirement)}>
                  Requirement Details
                </label>
                {errors.requirement && (
                  <span className="absolute top-4 right-4 text-red-500"><AlertCircle size={18} /></span>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-4 rounded-lg transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 interactive disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Request Quote'
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
