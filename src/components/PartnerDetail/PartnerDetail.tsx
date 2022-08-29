import classnames from 'classnames';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useState } from 'react';
import { IPartnerListFields } from 'src/types/contentful';
import styles from './PartnerDetail.module.scss';
import Image from 'next/image';

interface Props {
  partner: IPartnerListFields;
}

const PartnerDetail = ({ partner: { companyName, description, logo, testimonial } }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <div className={styles.partner}>
      <section className={styles.details}>
        <h4>{companyName}</h4>
        {description && documentToReactComponents(description.json)}
      </section>
      {testimonial && (
        <div>
          <button className={styles.toggle} onClick={() => toggleExpanded()}>
            {isExpanded ? 'Hide testimonial' : 'Read a testimonial of our work'}
          </button>
          <div className={classnames([styles.testimonial, isExpanded && styles.isExpanded])}>
            {logo && <Image src={logo.url} alt={companyName} width={logo.width} height={logo.height} unoptimized />}
            {description && documentToReactComponents(testimonial.json)}
          </div>
        </div>
      )}
    </div>
  );
};

export { PartnerDetail };
