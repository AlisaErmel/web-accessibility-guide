import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Hello!',
    Svg: () => (
      <img src={require('@site/static/img/mylogo.png').default} alt="Hello" className={styles.featureSvg} />
    ),
    description: (
      <>
        This technical documentation provides an overview of best practices for web accessibility.
      </>
    ),
  },
  {
    title: '3 Steps',
    Svg: () => (
      <img src={require('@site/static/img/steps.png').default} alt="Hello" className={styles.featureSvg} />
    ),
    description: (
      <>
        Don’t know where to start? What to do during the development phase? How to test? These guidelines will help you.
      </>
    ),
  },
  {
    title: 'Mission',
    Svg: () => (
      <img src={require('@site/static/img/mission.png').default} alt="Hello" className={styles.featureSvg} />
    ),
    description: (
      <>
        Together, we can create more accessible web applications for everyone!
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
