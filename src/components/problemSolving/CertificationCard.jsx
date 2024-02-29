import React from "react";
import './CertificationCard.css';
import {Document, Page} from '@react-pdf/renderer';
import DockerCertificate from '../../assets/images/certifications/Docker-And-Kubernetes-Practical-Guide.pdf';

const CertificationCard = ({certificate}) => {
    return (
        <div
            className="border-l px-2 py-1 space-y-2 border-gray-500 text-lg tracking-wide hover:shadow-sm">
            <h4 className="certificate-name tracking-wide font-medium text-[#202124] uppercase">{certificate.name}</h4>
            <div className="flex space-x-2">
                {certificate.orgIcon &&
                    <img src={certificate.orgIcon} alt="" className="w-6 h-6"/>}
                <span className="certificate-org-name text-[#202124]">{certificate.orgName}</span>
            </div>
            {
                certificate.type === 'pdf' ? (
                    <Document file={DockerCertificate}>
                        <Page pageNumber={1}/>
                    </Document>
                ) : (
                    <a href={certificate.credentialUrl} className="text-[#69a0d6] credential-url" target={'_blank'}
                       rel='noreferrer'>View credential</a>
                )
            }
        </div>
    );
};

export default CertificationCard;