import React from "react";
import Hackerrank from '../../assets/images/problem-solving/hackerrank_icon.png';
import Codechef from '../../assets/images/problem-solving/codechef.png';
import Codeforces from '../../assets/images/problem-solving/codeforces_icon.webp';
import ICPC from '../../assets/images/problem-solving/icpc_icon.png';
import Coursera from '../../assets/images/problem-solving/coursera_icon.png';
import {motion} from "framer-motion";
import OnlineJudgeCard from "../../components/problemSolving/OnlineJudgeCard";
import CertificationCard from "../../components/problemSolving/CertificationCard";

const ProblemSolving = () => {
    return (
        <div id="problem-solving" className="">
            <motion.div initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
                        className="flex flex-col py-16 lg:py-20 pb-20 max-w-7xl mx-auto p-5"
            >
                <div className="text-5xl lg:text-6xl text-gray-800 font-normal">
                    Problem Solving
                </div>

                <div className="font-light text-gray-600 my-6 tracking-wide">
                    In my 4+ years Competitive Coding Career, solved a huge number of problems(approximately <span className="font-medium">2500+</span>) and took part in National/International Collegiate Programming Contest<span className="font-medium">(NCPC/ICPC)</span>, Inter-university Programming Contest(IUPC) since 2016, also participated in daily available online contests in so many platforms (Codeforces, Codechef, Hackerrank etc). I have learnt and practiced with so many topics like data structures, graph theory, dynamic programming, mathematics, string processing, geometry and so on.
                </div>

                <div className="flex flex-col">
                    <h4 className="text-2xl font-bold tracking-wide leading-tight pb-8">Online Judges</h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-12 xl:gap-20 2xl:gap-32">
                        {
                            onlineJudges && onlineJudges.map((onlineJudge) => (
                                <OnlineJudgeCard onlineJudge={onlineJudge} />
                            ))
                        }
                    </div>

                    <div>
                        <h4 className="text-2xl font-bold tracking-wide leading-tight pt-12 pb-6">Certifications</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 2xl:gap-32">
                            {
                                certifications && certifications.map((certificate) => (
                                    <CertificationCard certificate={certificate} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default ProblemSolving;

const onlineJudges = [
    {
        name: 'Hackerrank',
        rating: 2281.3,
        username: 'hrOarr',
        link: 'https://www.hackerrank.com/hrOarr?hr_r=1',
        img: Hackerrank
    },
    {
        name: 'Codechef',
        rating: 2015,
        username: 'hroarr',
        link: 'https://www.codechef.com/users/hroarr',
        img: Codechef
    },
    {
        name: 'Codeforces',
        rating: 1755,
        username: 'arbitrary_A',
        link: 'http://codeforces.com/profile/arbitrary_A',
        img: Codeforces
    }
];

const certifications = [
    {
        name: 'ICPCID',
        orgName: 'ICPC - International Collegiate Programming Contest',
        orgIcon: ICPC,
        credentialUrl: 'https://icpc.global/ICPCID/VMF9OSPU53Q4'
    },
    {
        name: 'Front-End Web Development with React',
        orgName: 'Coursera',
        orgIcon: Coursera,
        credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/FL2HGWSHXNZ9'
    }
];