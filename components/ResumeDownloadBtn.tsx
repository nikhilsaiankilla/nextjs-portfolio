import React from 'react';
import Button from './Button';
import { DownloadIcon } from 'lucide-react';

type Props = {
    resume: string;
};

const ResumeDownloadBtn = ({ resume }: Props) => {
    // Fetch latest resume URL from Sanity CMS

    return (
        // Render download button with icon, ARIA label, and title for accessibility & SEO
        <Button
            title="Download CV"
            icon={<DownloadIcon size={17} aria-hidden="true" />}
            destination={resume}
        />
    );
};

export default ResumeDownloadBtn;
