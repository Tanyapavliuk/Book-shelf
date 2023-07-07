const charityFunds = [
    {
      title: 'Save the Children',
      url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
      img: '/src/images/support/save_the_children.png',
    },
    {
      title: 'Project HOPE',
      url: 'https://www.projecthope.org/country/ukraine/',
      img: '/src/images/support/project_hope.png',
    },
    {
      title: 'UNITED24',
      url: 'https://u24.gov.ua/uk',
      img: '/src/images/support/united24.png',
    },
    {
      title: 'International Medical Corps',
      url: 'https://internationalmedicalcorps.org/country/ukraine/',
      img: '/src/images/support/international_medical_corps.png',
    },
    {
      title: 'Medicins Sans Frontieres',
      url: 'https://www.msf.org/ukraine',
      img: '/src/images/support/medicins_sans_frontieres.png',
    },
    {
      title: 'RAZOM',
      url: 'https://www.razomforukraine.org/',
      img: '/src/images/support/razom.png',
    },
    {
      title: 'Action against hunger',
      url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
      img: '/src/images/support/action_against_hunger.png',
    },
    {
      title: 'World vision',
      url: 'https://www.wvi.org/emergencies/ukraine',
      img: '/src/images/support/world_vision.png',
    },
    {
      title: 'Serhiy Prytula Charity Foundation',
      url: 'https://prytulafoundation.org/en',
      img: '/src/images/support/serhiy_prytula_charity_foundation.png',
    },
  ];
  
  const charityList = document.querySelector('.support-list');

  const listItems = charityFunds.map(function(fund) {
    return `<li class="support-item">
    <a href="${fund.url}" class="support-link">
      <img src="${fund.img}" alt="${fund.title}" class="support-logo">
    </a>
  </li>`
  });

  console.log('listItems:', listItems);

  charityList.innerHTML = listItems.join('');

  console.log('charityList:', charityList);



 