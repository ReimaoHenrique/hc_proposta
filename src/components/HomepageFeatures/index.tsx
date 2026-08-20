import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Engenharia Mecânica e Elétrica',
    image: '/img/mecanica.jpg',
    description: (
      <>
        A tecnologia de <strong>Indução por Sobrepolos</strong>: uma nova
        arquitetura de máquina que busca maior potência em menos espaço, com
        fluxo axial, duplo estator, controle térmico ativo e manutenção
        modular.
      </>
    ),
    link: '/docs/pitch-deck/intro',
  },
  {
    title: 'Software e Hardware — HC Guardian',
    image: '/img/guardian_rs.jpg',
    description: (
      <>
        O ecossistema <strong>HC Guardian</strong>: firmware em Rust (STM32H7),
        diagnóstico com RHINOS, IA preditiva ARGUS e SENTRY, digital twin e
        monitoramento completo na nuvem.
      </>
    ),
    link: '/docs/master-plan/introducao',
  },
];

function Feature({title, image, description, link}: FeatureItem): JSX.Element {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <img className={styles.featureImg} src={image} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link className="button button--primary button--sm" to={link}>
          Saiba mais
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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