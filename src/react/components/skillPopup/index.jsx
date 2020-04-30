import React from 'react';

const SkillPopup = d => {
  const { data, onChange } = d;
  const CV = JSON.parse(localStorage.getItem('CV'));

  const mappedLinks = data.links
    ? data.links.map(link => (
        <li key={`${data.tag}_${link.name}`}>
          <a
            className="tag"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
          </a>
        </li>
      ))
    : null;

  const links = (
    <React.Fragment>
      <h4>Ссылки на материалы</h4>
      <ul>{mappedLinks}</ul>
    </React.Fragment>
  );

  // Set CV based on LocalStorage
  const setKnow = () => {
    const newCV = JSON.parse(localStorage.getItem('CV'));
    if (newCV && newCV.items.includes(data.name)) {
      newCV.items.splice(newCV.items.indexOf(data.name), 1);
    } else {
      newCV.items.push(data.name);
    }
    localStorage.setItem('CV', JSON.stringify(newCV));
    $('.btn-know').toggleClass('btn-know--active');
    onChange();
  };

  const btnClasses = ['btn-know'];
  if (CV && CV.items.includes(data.name)) btnClasses.push('btn-know--active');

  return (
    <React.Fragment>
      <button title="Close (Esc)" type="button" className="mfp-close">
        ×
      </button>
      <h2>
        {data.name ? data.name : data.tag}
        <button
          type="button"
          onClick={() => setKnow(data.name)}
          className={btnClasses.join(' ')}
        >
          Я это знаю
        </button>
      </h2>
      <p>{data.text ? data.text : null}</p>
      {links}
    </React.Fragment>
  );
};

export default SkillPopup;
