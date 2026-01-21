
import React from 'react';
import { Trophy, Instagram, Facebook, Twitter, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="bg-white text-black p-2 rounded-lg">
                <Trophy size={24} />
              </div>
              <span className="font-syncopate font-bold text-2xl tracking-tight">HOS</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8">
              A growing sports community where athletes, enthusiasts, and beginners
              come together to play, compete, and grow, both on and off the field.
            </p>
            <div className="flex gap-4">
              <SocialIcon
                href="https://wa.me/918076930593?text=i%20need%20some%20support%20or%20i%20have%20a%20grievance"
                icon={<MessageCircle size={20} />}
              />
              <SocialIcon
                href="https://www.instagram.com/hos_house.of.sports?igsh=MWQ4YTd6NXd3a3Rsdg%3D%3D&utm_source=qr"
                icon={<Instagram size={20} />}
              />
              <SocialIcon
                href="mailto:Houseofsports.hos@gmail.com"
                icon={<Mail size={20} />}
              />
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><FooterLink label="Our Story" /></li>
              <li><FooterLink label="Explore Sports" /></li>
              <li><FooterLink label="Become a Captain" /></li>
              <li><FooterLink label="Book a Session" /></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest">Categories</h4>
            <ul className="space-y-4 text-gray-400">
              <li><FooterLink label="Badminton" /></li>
              <li><FooterLink label="Football" /></li>
              <li><FooterLink label="Volleyball" /></li>
              <li><FooterLink label="Basketball" /></li>
              <li><FooterLink label="Pickleball" /></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest">Contact</h4>
            <ul className="space-y-6 text-gray-400">
              <li className="flex items-center gap-4">
                <div className="bg-white/10 p-2 rounded-lg"><Phone size={18} /></div>
                <span>+91 80769 30593</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-white/10 p-2 rounded-lg"><Mail size={18} /></div>
                <span>Houseofsports.hos@gmail.com</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-white/10 p-2 rounded-lg"><MapPin size={18} /></div>
                <span>Delhi NCR, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © 2024 House of Sports Community. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
  >
    {icon}
  </a>
);

const FooterLink = ({ label }: { label: string }) => (
  <a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">
    <div className="w-1 h-1 bg-white scale-0 group-hover:scale-100 transition-transform rounded-full"></div>
    {label}
  </a>
);
