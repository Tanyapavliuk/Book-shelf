import saveTheChildren from '../images/support/save_the_children.png';
import projectHope from '../images/support/project_hope.png';
import united24 from '../images/support/united24.png';
import internationalMedicalCorps from '../images/support/international_medical_corps.png';
import medicinsSansFrontieres from '../images/support/medicins_sans_frontieres.png';
import razom from '../images/support/razom.png';
import actionAgainstHunger from '../images/support/action_against_hunger.png';
import worldVision from '../images/support/world_vision.png';
import serhiyPrytulaCharityFoundation from '../images/support/serhiy_prytula_charity_foundation.png';


const charityFunds = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: saveTheChildren,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: projectHope,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: united24,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: internationalMedicalCorps,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: medicinsSansFrontieres,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: razom,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: actionAgainstHunger,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: worldVision,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: serhiyPrytulaCharityFoundation,
  },
];

const charityList = document.querySelector('.support-list');

const listItems = charityFunds.map(function(fund) {
  return `<li class="support-item">
  <div class="fund-container"> <img src="${fund.img}" alt="${fund.title}" class="support-logo" data-url="${fund.url}" height="32px"></div>
 
  </li>`;
});

charityList.innerHTML = listItems.join('');

const supportLogos = document.querySelectorAll('.support-logo');

supportLogos.forEach(function(logo) {
  logo.addEventListener('click', function() {
    const url = this.getAttribute('data-url');
    window.open(url, '_blank');
  });
});

// const supportBlock = document.querySelector('.support');
// const seeMoreButton = document.querySelector('.see-more');

// seeMoreButton.addEventListener('click', function (e) {
//   supportBlock.classList.toggle('expanded');
// });
// видалити



