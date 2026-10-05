"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactForm = () => {
  return (
    <section className="py-24 px-8 max-w-3xl mx-auto">
      <h2 className="text-5xl font-bold mb-12">Tell us what you're trying to automate.</h2>
      <form className="space-y-8">
        {['Name', 'Email', 'Company', 'What to automate?'].map((field) => (
          <div key={field} className="flex flex-col gap-2">
            <label className="text-sm text-text-muted">{field}</label>
            <input
              className="bg-transparent border-b border-surface p-2 focus:border-accent outline-none transition-colors"
              placeholder={`Enter your ${field.toLowerCase()}...`}
            />
          </div>
        ))}
        <button className="px-8 py-4 bg-accent text-bg font-bold rounded-full w-full">
          START A PROJECT →
        </button>
      </form>
    </section>
  );
};
