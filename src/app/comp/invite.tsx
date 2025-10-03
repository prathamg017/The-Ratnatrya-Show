// components/InvitesSponsors.tsx
'use client';
import Image from "next/image";
import { useEffect, useState } from "react";

export default function InvitesSponsors() {
  return (
    <section className="invites-sponsors-section py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="container flex flex-col lg:flex-row gap-12 lg:gap-16 items-start justify-center">

        {/* Official Invitations Slideshow */}
        <div className="slideshow-container flex-1">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-icon">✨</span>
              Official Invitations
            </h2>
            <div className="title-underline"></div>
          </div>

          <div className="relative w-full max-w-xs mx-auto h-[400px] mt-6">
            {(() => {
              const invites = [
                { img: '/invitemain.jpg', name: 'Main Invitation' },
                { img: '/creatorpage.jpg', name: 'Creator Page' },
                { img: '/invitecontent.jpeg', name: 'Event Details' },
              ];
              const [currentInvite, setCurrentInvite] = useState(0);

              useEffect(() => {
                const interval = setInterval(() => {
                  setCurrentInvite(prev => (prev + 1) % invites.length);
                }, 3000);
                return () => clearInterval(interval);
              }, []);

              return invites.map((invite, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    currentInvite === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  } flex flex-col items-center text-center bg-white rounded-lg shadow-lg p-4`}
                >
                  <Image
                    src={invite.img}
                    alt={invite.name}
                    width={250}
                    height={300}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <h3 className="mt-3 text-lg font-semibold text-gray-800">{invite.name}</h3>
                </div>
              ));
            })()}
          </div>

          <div className="mt-6 flex justify-center">
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:opacity-90 transition">
              ✦ Get Your Personalized Invitation Now ✦
            </button>
          </div>
        </div>

        {/* Sponsors Slideshow */}
        <div className="slideshow-container flex-1">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-icon">🏆</span>
              Our Sponsors
            </h2>
            <div className="title-underline"></div>
          </div>

          <div className="relative w-full max-w-xs mx-auto h-[400px] mt-6">
            {(() => {
              const sponsors = [
                {
                  image: '/sponsor1.jpg',
                  name: 'Sponsor 1',
                  description: 'Leading provider of event decorations and logistics.',
                },
                {
                  image: '/sponsor2.jpg',
                  name: 'Sponsor 2',
                  description: 'Specialists in music and entertainment services for events.',
                },
                {
                  image: '/sponsor3.jpg',
                  name: 'Sponsor 3',
                  description: 'Experts in catering and authentic Jain cuisine.',
                },
              ];
              const [currentSponsor, setCurrentSponsor] = useState(0);

              useEffect(() => {
                const interval = setInterval(() => {
                  setCurrentSponsor(prev => (prev + 1) % sponsors.length);
                }, 3000);
                return () => clearInterval(interval);
              }, []);

              return sponsors.map((sponsor, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    currentSponsor === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  } flex flex-col items-center text-center bg-white rounded-lg shadow-lg p-4`}
                >
                  <Image
                    src={sponsor.image}
                    alt={sponsor.name}
                    width={250}
                    height={300}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <h3 className="mt-3 text-lg font-semibold text-gray-800">{sponsor.name}</h3>
                  <p className="mt-1 text-gray-600 text-sm">{sponsor.description}</p>
                </div>
              ));
            })()}
          </div>

          <div className="mt-6 flex justify-center">
            <button className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:opacity-90 transition">
              ✦ Become a Sponsor ✦
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
