import React, { ReactChild } from 'react';
import './Section.less';

interface SectionProps {
    children: ReactChild | ReactChild[];
}

const Section = ({ children }: SectionProps) => {
    return <div className="Section">{children}</div>;
};

export default Section;
