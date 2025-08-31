import React, { useState } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "रीना शर्मा",
    nameEn: "Reena Sharma",
    role: "स्थानीय निवासी",
    roleEn: "Local Resident",
    image: "RS",
    content: "मैंने टूटी हुई स्ट्रीट लाइट की शिकायत की थी और यह 3 दिनों में ठीक हो गई! रियल-टाइम अपडेट्स ने बहुत मदद की। पहली बार लगा कि सरकारी सेवा वास्तव में काम कर रही है।",
    contentEn: "I reported a broken street light and it was fixed within 3 days! Real-time updates really helped. For the first time, it felt like government service truly works.",
    rating: 5,
    issue: "स्ट्रीट लाइट रिपेयर",
    issueEn: "Street Light Repair"
  },
  {
    name: "अजय वर्मा",
    nameEn: "Ajay Verma",
    role: "व्यवसायी",
    roleEn: "Business Owner",
    image: "AV",
    content: "एआई ने मुझे शोर की समस्या पर स्पष्ट शिकायत लिखने में मदद की। समाधान तेज और निष्पक्ष था। यह प्लेटफ़ॉर्म सच में नागरिकों की बात सुनता है।",
    contentEn: "AI helped me write a clear complaint about the noise issue. The resolution was quick and fair. This platform truly listens to citizens.",
    rating: 5,
    issue: "शोर शिकायत",
    issueEn: "Noise Complaint"
  },
  {
    name: "प्रिया नायर",
    nameEn: "Priya Nair",
    role: "सामुदायिक कार्यकर्ता",
    roleEn: "Community Activist",
    image: "PN",
    content: "पारदर्शिता अद्भुत है! मैं अपने इलाके में क्या हो रहा है, यह देख सकती हूं और कई मुद्दों की प्रगति ट्रैक कर सकती हूं। यही सही शासन है।",
    contentEn: "The transparency is amazing! I can see what’s happening in my area and track the progress of multiple issues. This is real governance.",
    rating: 5,
    issue: "कई मुद्दे",
    issueEn: "Multiple Issues"
  },
  {
    name: "संजय गुप्ता",
    nameEn: "Sanjay Gupta",
    role: "आईटी प्रोफेशनल",
    roleEn: "IT Professional",
    image: "SG",
    content: "मेरी पानी की समस्या का समाधान 48 घंटे के भीतर हुआ। मुझे हर स्टेप पर नोटिफिकेशन मिला। शानदार अनुभव!",
    contentEn: "My water issue was resolved within 48 hours. I got notifications at every step. Great experience!",
    rating: 5,
    issue: "पानी की आपूर्ति",
    issueEn: "Water Supply"
  },
  {
    name: "नेहा सिंह",
    nameEn: "Neha Singh",
    role: "शिक्षिका",
    roleEn: "Teacher",
    image: "NS",
    content: "गड्ढों की शिकायत करना बहुत आसान था। अब सड़क साफ और सुरक्षित है। यह प्लेटफ़ॉर्म बहुत उपयोगी है।",
    contentEn: "Reporting potholes was very easy. Now the road is clean and safe. This platform is very useful.",
    rating: 5,
    issue: "सड़क की मरम्मत",
    issueEn: "Road Repair"
  },
  {
    name: "विक्रम देशमुख",
    nameEn: "Vikram Deshmukh",
    role: "उद्यमी",
    roleEn: "Entrepreneur",
    image: "VD",
    content: "सरकारी सेवाओं पर भरोसा बढ़ गया है। यह सिस्टम पारदर्शिता और त्वरित समाधान दोनों देता है।",
    contentEn: "Trust in government services has increased. This system provides both transparency and quick resolution.",
    rating: 5,
    issue: "शिकायत समाधान",
    issueEn: "Complaint Resolution"
  }
];

export default function TestimonialsSection() {
  const [language, setLanguage] = useState<'hi' | 'en'>('hi');

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 flex justify-center items-center gap-3">
            <Quote className="w-8 h-8 text-blue-600" />
            {language === 'hi' ? 'उपयोगकर्ता समीक्षाएँ' : 'User Testimonials'}
          </h2>
          <p className="text-gray-600 mt-4">
            {language === 'hi'
              ? 'देखें लोग हमारे बारे में क्या कह रहे हैं'
              : 'See what people are saying about us'}
          </p>
        </div>

        {/* Language Toggle */}
        <div className="text-center mb-8">
          <button
            onClick={() => setLanguage(language === 'hi' ? 'en' : 'hi')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {language === 'hi' ? 'Switch to English' : 'हिंदी में देखें'}
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-lg">
                  {testimonial.image}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {language === 'hi' ? testimonial.name : testimonial.nameEn}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {language === 'hi' ? testimonial.role : testimonial.roleEn}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                {language === 'hi' ? testimonial.content : testimonial.contentEn}
              </p>
              <div className="flex items-center mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-sm text-gray-500">
                {language === 'hi' ? testimonial.issue : testimonial.issueEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
