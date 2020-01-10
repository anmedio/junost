import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

const githubUrl = 'https://github.com/anmedio/grades';

// Components
import SkillPopup from '~/components/skillPopup';
import SoonPopup from '~/components/soonPopup';
import OnboardingPopup from '~/components/onboardingPopup';

class Grades extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      data: props.data,
      opened: []
    };
  }

  componentDidMount() {
    if (!localStorage.getItem('CV'))
      localStorage.setItem('CV',JSON.stringify({items:[]}));

    if (localStorage.getItem('onboarding') != 'true')
      this.showOnboarding();

    $('.grade-section__slider')
      .addClass('owl-carousel owl-theme')
      .owlCarousel({
        loop: false,
        items: 1,
        dots: false,
        nav: false,
        margin: 15,
        responsive: {
          768: {
            items: 1,
            margin: 20,
          },
          1024: {
            items: 2,
            margin: 30,
          },
          1440: {
            items: 2,
            margin: 35,
          },
        },
      });
  }

  showOnboarding() {
    $.magnificPopup.open({
      items: {
        src: '#popup',
        type: 'inline'
      },
      removalDelay: 250,
      callbacks: {
        beforeOpen() {
          this.st.mainClass = 'mfp-anim';
        },
        open() {
          render(<OnboardingPopup />, $('#popup')[0]);
        },
        close() {
          render(<div />, $('#popup')[0]);
        },
      },
    });
  }

  openSoon() {
    $.magnificPopup.open({
      items: {
        src: '#popup',
        type: 'inline'
      },
      removalDelay: 250,
      callbacks: {
        beforeOpen() {
          this.st.mainClass = 'mfp-anim';
        },
        open() {
          render(<SoonPopup />, $('#popup')[0]);
        },
        close() {
          render(<div />, $('#popup')[0]);
        },
      },
    });
  }

  toggleOpened(name) {
    let { opened } = this.state;
    const findName = opened.indexOf(name);
    if (findName == -1) opened.push(name);
    if (findName >= 0) opened.splice(findName, 1);

    this.setState({ opened });
  }

  openSkill(skill) {
    const parent = this;
    $.magnificPopup.open({
      items: {
        src: '#popup',
        type: 'inline'
      },
      removalDelay: 250,
      callbacks: {
        beforeOpen() {
          this.st.mainClass = 'mfp-anim';
        },
        open() {
          render(<SkillPopup data={skill} onChange={() => parent.forceUpdate()} />, $('#popup')[0]);
        },
        close() {
          render(<div />, $('#popup')[0]);
        },
      },
    });
  }

  prepareRows() {
    const { data, opened } = this.state;

    const rows = data.map(row => {

      const classes = ['grade-section'];
      if (opened.indexOf(row.name) >= 0) classes.push('is-open');
      if (row.soon) classes.push('is-soon');

      const levels = row.levels.map(level => {
        // If empty - show "soon"
        if (level.skills.length == 0) {
          return (
            <div key={`${row.name}_${level.name}`} className="grade">
              <h4 className="grade__title title title--grey">{level.name}</h4>
              <div className="grade__block">
                <button
                  type="button"
                  className="grade__item grade__item--soon"
                  onClick={() => this.openSoon()}
                  key={`${row.name}_${level.name}_soon`}
                >
                  Скоро
                </button>
              </div>
            </div>
          ) 
        }

        const CV = JSON.parse(localStorage.getItem('CV'));
        let counterKnownSkills = 0;
        const skills = level.skills.map(skill => {

          const skillClasses = ['grade__item'];
          if (CV && CV.items.includes(skill.name)){
            skillClasses.push('grade__item--active');
            counterKnownSkills++;
          }

          return (
            <button
              type="button"
              className={skillClasses.join(' ')}
              onClick={() => this.openSkill(skill)}
              key={`${row.name}_${level.name}_${skill.tag}`}
            >
              {skill.tag}
            </button>
          )
        });

        // Show percentage
        let percentage = null;
        // For future times
        // if (counterKnownSkills > 0) {
        //   percentage = (<sup>{parseInt(counterKnownSkills/skills.length*100)}%</sup>);
        // }

        return (
          <div key={`${row.name}_${level.name}`} className="grade">
            <h4 className="grade__title title title--grey">
              {level.name}
              {percentage}
            </h4>
            <div className="grade__block">
              {skills}
            </div>
            <a
              target="_blank"
              href={githubUrl}
              className="grade__btn btn"
            >
              Добавить
            </a>
          </div>
        )

      });

      return (
        <section key={row.name} className={classes.join(' ')}>
          <div className="container grade-section__wrap">
            <button
              type="button"
              className="title grade-section__title"
              onClick={() => this.toggleOpened(row.name)}
            >
              <span></span>
              {row.name}
            </button>
            <div className="grade-section__slider">
              {levels}
            </div>
          </div>
        </section>
      )
    });

    return rows;
  }

  render() {
    return (
      <React.Fragment>
        {this.prepareRows()}
        <div className="grade-popup" id="popup" />
      </React.Fragment>
    );
  }
}

export default Grades;
