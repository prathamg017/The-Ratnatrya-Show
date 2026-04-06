import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Join the Team – The Ratnatraya Show',
  description: 'Be a part of The Ratnatraya Show digital team. We are looking for graphic designers, video editors, and developers to scale the Voice of Jinshasan.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function JoinTeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
