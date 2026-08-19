import React, {useEffect} from 'react';
import {useLocation} from '@docusaurus/router';

export default function Root({children}: {children: React.ReactNode}): React.ReactNode {
  const location = useLocation();

  useEffect(() => {
    const embedded = new URLSearchParams(location.search).has('lms-embed');
    const html = document.documentElement;
    if (embedded) {
      html.dataset.lmsEmbed = 'true';
      html.dataset.theme = 'dark';
    } else {
      delete html.dataset.lmsEmbed;
    }
  }, [location.search]);

  return children;
}
