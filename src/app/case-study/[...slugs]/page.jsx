import OurSolutionsCaseStudy from '../../_components/case_study_detail/OurSolutionsCaseStudy';
import ProjectChallenges from '../../_components/case_study_detail/ProjectChallenges';
import TechnologiesUsedCaseStudy from '../../_components/case_study_detail/TechnologiesUsedCaseStudy';
import CaseStudyDetailBanner from '../../_components/case_study_detail/CaseStudyDetailBanner';
import ExecutiveSummary from '../../_components/case_study_detail/ExecutiveSummary';
import FAQSection from '../../_components/services_components/FAQSection';
import ImpactOnBusinessCaseStudy from '../../_components/case_study_detail/ImpactOnBusinessCaseStudy';
import ConclusionSectionCaseStudy from '../../_components/case_study_detail/ConclusionSectionCaseStudy';
import CTASection from '../../_components/home/CTASection';
import CaseStudyCarousel from '@/app/_components/home/CaseStudyCarousel';

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
export async function generateMetadata({ params }) {
  // Join the slug segments
  const fullSlug = params.slugs.join('/');
  return await generateDynamicMetadata({ 
    params: { slug: fullSlug }
  });
} 

const CaseStudyDetail = ({ params }) => {
  const { slug } = params; // ✅ Extract slug
  const fullPath = params.slugs.join('/');

  return (
    <div>
      {/* Pass slug to each child component */}
      <CaseStudyDetailBanner slug={fullPath} />
      <ExecutiveSummary slug={fullPath} />
      <ProjectChallenges slug={fullPath} />
      <OurSolutionsCaseStudy slug={fullPath} />
      <TechnologiesUsedCaseStudy slug={fullPath} />
      <ImpactOnBusinessCaseStudy slug={fullPath} />
      <ConclusionSectionCaseStudy slug={fullPath} />
      
      {/* Common sections */}
      <CaseStudyCarousel/>
      <CTASection
        title="Need a Website, Web Application, Customized CRM Software or a Mobile App for your Business?"
        description=""
      />
    </div>
  );
};

export default CaseStudyDetail;
