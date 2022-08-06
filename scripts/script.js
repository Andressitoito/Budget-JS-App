$(document).ready(function () {

  /* ////////////////////////////////////////////////////////////////// */
  /* SELECTORS */
  /* ////////////////////////////////////////////////////////////////// */
  /* SELECTORS PANTALLA PRINCIPAL*/
  const presupuesto_titulo = document.querySelector('.presupuesto-titulo')
  const ingreso_name = document.querySelector('#ingreso-name')
  const main_presupuesto_resto = document.querySelector('#main-presupuesto-resto')
  const main_presupuesto_base = document.querySelector('#main-presupuesto-base')
  const ingreso_compras = document.querySelector('#ingreso-compras')
  /* SELECTORS MODAL INGRESO NOMBRE */
  const input_title = document.querySelector('#input-title')
  const title_btn_ok = document.querySelector('#title-btn-ok')
  const title_btn_close = document.querySelector('#title-btn-close')
  /* SELECTORS MODAL INGRESO MAIN PRESUPUESTO BASE */
  const input_monto_base = document.querySelector('#input-monto-base')
  const base_btn_ok = document.querySelector('#base-btn-ok')
  const base_btn_close = document.querySelector('#base-btn-close')
  /* SELECTORS MODAL INGRESO NUEVA COMPRA */
  const input_compra_name = document.querySelector('#input-compra-name')
  const input_compra_monto = document.querySelector('#input-compra-monto')
  const compra_btn_ok = document.querySelector('#compra-btn-ok')
  const compra_btn_close = document.querySelector('#compra-btn-close')
  /* COMPRAS-LIST */
  const compras_list = document.querySelector('.compras-list')
  /* VARIABLES DE CALCULOS */
  let monto_base = 0
  let resto = 0

  /* ////////////////////////////////////////////////////////////////// */
  /* MODAL FUNCTIONS */
  /* ////////////////////////////////////////////////////////////////// */
  const openModalButtons = document.querySelectorAll('[data-modal-target]')
  const closeModalButtons = document.querySelectorAll('[data-close-button]')
  const overlay = document.querySelector('#overlay')

  openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget)
      openModal(modal)
    })
  })

  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal')
      closeModal(modal)
    })
  })

  function openModal(modal) {
    event.preventDefault()
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
  }

  function closeModal(modal) {
    event.preventDefault()
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
  }

  /* ////////////////////////////////////////////////////////////////// */
  /* CHECKEAR QUE TODA LA PAGINA HAYA CARGADO PRIMERO */
  /* ////////////////////////////////////////////////////////////////// */
  document.addEventListener('DOMContentLoaded', loadActiveScreen(), getCompras(), updateTitle(), updateMonto())

  /* ////////////////////////////////////////////////////////////////// */
  /* DARLE CLASS ACTIVE A LA PANTALLA DESDE EL LOCAL STORAGE */
  /* ////////////////////////////////////////////////////////////////// */

  function loadActiveScreen() {

    let activeScreen = localStorage.getItem('activeScreen')

    if (activeScreen === null) {
      activeScreen = ['btn-screen-1']
      localStorage.setItem('activeScreen', JSON.stringify(activeScreen))
    } else {

      switch (true) {

        case JSON.parse(activeScreen)[0] == 'btn-screen-1':
          $('#btn-screen-1').addClass('screen-active')
          $('#btn-screen-2').removeClass('screen-active')
          $('#btn-screen-3').removeClass('screen-active')
          $('#btn-screen-4').removeClass('screen-active')
          $('#btn-screen-5').removeClass('screen-active')
          $('#btn-screen-6').removeClass('screen-active')
          $('#btn-screen-7').removeClass('screen-active')
          $('#btn-screen-8').removeClass('screen-active')
          $('#btn-screen-9').removeClass('screen-active')
          $('#btn-screen-10').removeClass('screen-active')
          $('#btn-screen-11').removeClass('screen-active')
          $('#btn-screen-12').removeClass('screen-active')
          $('#btn-screen-13').removeClass('screen-active')
          break

        case JSON.parse(activeScreen)[0] == 'btn-screen-2':
          $('#btn-screen-1').removeClass('screen-active')
          $('#btn-screen-2').addClass('screen-active')
          $('#btn-screen-3').removeClass('screen-active')
          $('#btn-screen-4').removeClass('screen-active')
          $('#btn-screen-5').removeClass('screen-active')
          $('#btn-screen-6').removeClass('screen-active')
          $('#btn-screen-7').removeClass('screen-active')
          $('#btn-screen-8').removeClass('screen-active')
          $('#btn-screen-9').removeClass('screen-active')
          $('#btn-screen-10').removeClass('screen-active')
          $('#btn-screen-11').removeClass('screen-active')
          $('#btn-screen-12').removeClass('screen-active')
          $('#btn-screen-13').removeClass('screen-active')
          break

        case JSON.parse(activeScreen)[0] == 'btn-screen-3':
          $('#btn-screen-1').removeClass('screen-active')
          $('#btn-screen-2').removeClass('screen-active')
          $('#btn-screen-3').addClass('screen-active')
          $('#btn-screen-4').removeClass('screen-active')
          $('#btn-screen-5').removeClass('screen-active')
          $('#btn-screen-6').removeClass('screen-active')
          $('#btn-screen-7').removeClass('screen-active')
          $('#btn-screen-8').removeClass('screen-active')
          $('#btn-screen-9').removeClass('screen-active')
          $('#btn-screen-10').removeClass('screen-active')
          $('#btn-screen-11').removeClass('screen-active')
          $('#btn-screen-12').removeClass('screen-active')
          $('#btn-screen-13').removeClass('screen-active')
          break

        case JSON.parse(activeScreen)[0] == 'btn-screen-4':
          $('#btn-screen-1').removeClass('screen-active')
          $('#btn-screen-2').removeClass('screen-active')
          $('#btn-screen-3').removeClass('screen-active')
          $('#btn-screen-4').addClass('screen-active')
          $('#btn-screen-5').removeClass('screen-active')
          $('#btn-screen-6').removeClass('screen-active')
          $('#btn-screen-7').removeClass('screen-active')
          $('#btn-screen-8').removeClass('screen-active')
          $('#btn-screen-9').removeClass('screen-active')
          $('#btn-screen-10').removeClass('screen-active')
          $('#btn-screen-11').removeClass('screen-active')
          $('#btn-screen-12').removeClass('screen-active')
          $('#btn-screen-13').removeClass('screen-active')
          break

        case JSON.parse(activeScreen)[0] == 'btn-screen-5':
          $('#btn-screen-1').removeClass('screen-active')
          $('#btn-screen-2').removeClass('screen-active')
          $('#btn-screen-3').removeClass('screen-active')
          $('#btn-screen-4').removeClass('screen-active')
          $('#btn-screen-5').addClass('screen-active')
          $('#btn-screen-6').removeClass('screen-active')
          $('#btn-screen-7').removeClass('screen-active')
          $('#btn-screen-8').removeClass('screen-active')
          $('#btn-screen-9').removeClass('screen-active')
          $('#btn-screen-10').removeClass('screen-active')
          $('#btn-screen-11').removeClass('screen-active')
          $('#btn-screen-12').removeClass('screen-active')
          $('#btn-screen-13').removeClass('screen-active')
          break

        case JSON.parse(activeScreen)[0] == 'btn-screen-6':
          $('#btn-screen-1').removeClass('screen-active')
          $('#btn-screen-2').removeClass('screen-active')
          $('#btn-screen-3').removeClass('screen-active')
          $('#btn-screen-4').removeClass('screen-active')
          $('#btn-screen-5').removeClass('screen-active')
          $('#btn-screen-6').addClass('screen-active')
          $('#btn-screen-7').removeClass('screen-active')
          $('#btn-screen-8').removeClass('screen-active')
          $('#btn-screen-9').removeClass('screen-active')
          $('#btn-screen-10').removeClass('screen-active')
          $('#btn-screen-11').removeClass('screen-active')
          $('#btn-screen-12').removeClass('screen-active')
          $('#btn-screen-13').removeClass('screen-active')
          break

        case JSON.parse(activeScreen)[0] == 'btn-screen-7':
          $('#btn-screen-1').removeClass('screen-active')
          $('#btn-screen-2').removeClass('screen-active')
          $('#btn-screen-3').removeClass('screen-active')
          $('#btn-screen-4').removeClass('screen-active')
          $('#btn-screen-5').removeClass('screen-active')
          $('#btn-screen-6').removeClass('screen-active')
          $('#btn-screen-7').addClass('screen-active')
          $('#btn-screen-8').removeClass('screen-active')
          $('#btn-screen-9').removeClass('screen-active')
          $('#btn-screen-10').removeClass('screen-active')
          $('#btn-screen-11').removeClass('screen-active')
          $('#btn-screen-12').removeClass('screen-active')
          $('#btn-screen-13').removeClass('screen-active')
          break

        case JSON.parse(activeScreen)[0] == 'btn-screen-8':
          $('#btn-screen-1').removeClass('screen-active')
          $('#btn-screen-2').removeClass('screen-active')
          $('#btn-screen-3').removeClass('screen-active')
          $('#btn-screen-4').removeClass('screen-active')
          $('#btn-screen-5').removeClass('screen-active')
          $('#btn-screen-6').removeClass('screen-active')
          $('#btn-screen-7').removeClass('screen-active')
          $('#btn-screen-8').addClass('screen-active')
          $('#btn-screen-9').removeClass('screen-active')
          $('#btn-screen-10').removeClass('screen-active')
          $('#btn-screen-11').removeClass('screen-active')
          $('#btn-screen-12').removeClass('screen-active')
          $('#btn-screen-13').removeClass('screen-active')
          break

        case JSON.parse(activeScreen)[0] == 'btn-screen-9':
          $('#btn-screen-1').removeClass('screen-active')
          $('#btn-screen-2').removeClass('screen-active')
          $('#btn-screen-3').removeClass('screen-active')
          $('#btn-screen-4').removeClass('screen-active')
          $('#btn-screen-5').removeClass('screen-active')
          $('#btn-screen-6').removeClass('screen-active')
          $('#btn-screen-7').removeClass('screen-active')
          $('#btn-screen-8').removeClass('screen-active')
          $('#btn-screen-9').addClass('screen-active')
          $('#btn-screen-10').removeClass('screen-active')
          $('#btn-screen-11').removeClass('screen-active')
          $('#btn-screen-12').removeClass('screen-active')
          $('#btn-screen-13').removeClass('screen-active')
          break

        case JSON.parse(activeScreen)[0] == 'btn-screen-10':
          $('#btn-screen-1').removeClass('screen-active')
          $('#btn-screen-2').removeClass('screen-active')
          $('#btn-screen-3').removeClass('screen-active')
          $('#btn-screen-4').removeClass('screen-active')
          $('#btn-screen-5').removeClass('screen-active')
          $('#btn-screen-6').removeClass('screen-active')
          $('#btn-screen-7').removeClass('screen-active')
          $('#btn-screen-8').removeClass('screen-active')
          $('#btn-screen-9').removeClass('screen-active')
          $('#btn-screen-10').addClass('screen-active')
          $('#btn-screen-11').removeClass('screen-active')
          $('#btn-screen-12').removeClass('screen-active')
          $('#btn-screen-13').removeClass('screen-active')
          break

        case JSON.parse(activeScreen)[0] == 'btn-screen-11':
          $('#btn-screen-1').removeClass('screen-active')
          $('#btn-screen-2').removeClass('screen-active')
          $('#btn-screen-3').removeClass('screen-active')
          $('#btn-screen-4').removeClass('screen-active')
          $('#btn-screen-5').removeClass('screen-active')
          $('#btn-screen-6').removeClass('screen-active')
          $('#btn-screen-7').removeClass('screen-active')
          $('#btn-screen-8').removeClass('screen-active')
          $('#btn-screen-9').removeClass('screen-active')
          $('#btn-screen-10').removeClass('screen-active')
          $('#btn-screen-11').addClass('screen-active')
          $('#btn-screen-12').removeClass('screen-active')
          $('#btn-screen-13').removeClass('screen-active')
          break

        case JSON.parse(activeScreen)[0] == 'btn-screen-12':
          $('#btn-screen-1').removeClass('screen-active')
          $('#btn-screen-2').removeClass('screen-active')
          $('#btn-screen-3').removeClass('screen-active')
          $('#btn-screen-4').removeClass('screen-active')
          $('#btn-screen-5').removeClass('screen-active')
          $('#btn-screen-6').removeClass('screen-active')
          $('#btn-screen-7').removeClass('screen-active')
          $('#btn-screen-8').removeClass('screen-active')
          $('#btn-screen-9').removeClass('screen-active')
          $('#btn-screen-10').removeClass('screen-active')
          $('#btn-screen-11').removeClass('screen-active')
          $('#btn-screen-12').addClass('screen-active')
          $('#btn-screen-13').removeClass('screen-active')
          break

        case JSON.parse(activeScreen)[0] == 'btn-screen-13':
          $('#btn-screen-1').removeClass('screen-active')
          $('#btn-screen-2').removeClass('screen-active')
          $('#btn-screen-3').removeClass('screen-active')
          $('#btn-screen-4').removeClass('screen-active')
          $('#btn-screen-5').removeClass('screen-active')
          $('#btn-screen-6').removeClass('screen-active')
          $('#btn-screen-7').removeClass('screen-active')
          $('#btn-screen-8').removeClass('screen-active')
          $('#btn-screen-9').removeClass('screen-active')
          $('#btn-screen-10').removeClass('screen-active')
          $('#btn-screen-11').removeClass('screen-active')
          $('#btn-screen-12').removeClass('screen-active')
          $('#btn-screen-13').addClass('screen-active')
          break

        default:
          console.log('++++++++++ no entro a ninguno')
      }
    }
  }

  /* ////////////////////////////////////////////////////////////////// */
  /* DARLE CLASS ACTIVE A LOS BOTONES */
  /* ////////////////////////////////////////////////////////////////// */
  function buttonClicked() {
    document.querySelectorAll('.btn-screens').forEach(button => {
      button.classList.remove('screen-active');
    });
    event.preventDefault()
    this.classList.add('screen-active');

    let activeScreen

    switch (true) {

      case $('#btn-screen-1').hasClass('screen-active'):
        if (localStorage.getItem('activeScreen') === null) {
          activeScreen = []
        } else {
          activeScreen = JSON.parse(localStorage.getItem('activeScreen'))
        }

        localStorage.removeItem('activeScreen')

        if (localStorage.getItem('activeScreen') === null) {
          activeScreen = []
        } else {
          activeScreen = JSON.parse(localStorage.getItem('activeScreen'))
        }

        activeScreen.push(['btn-screen-1'])
        localStorage.setItem('activeScreen', JSON.stringify(activeScreen))

        break

      case $('#btn-screen-2').hasClass('screen-active'):
        if (localStorage.getItem('activeScreen') === null) {
          activeScreen = []
        } else {
          activeScreen = JSON.parse(localStorage.getItem('activeScreen'))
        }

        localStorage.removeItem('activeScreen')

        if (localStorage.getItem('activeScreen') === null) {
          activeScreen = []
        } else {
          activeScreen = JSON.parse(localStorage.getItem('activeScreen'))
        }

        activeScreen.push(['btn-screen-2'])
        localStorage.setItem('activeScreen', JSON.stringify(activeScreen))

        break

      case $('#btn-screen-3').hasClass('screen-active'):
        if (localStorage.getItem('activeScreen') === null) {
          activeScreen = []
        } else {
          activeScreen = JSON.parse(localStorage.getItem('activeScreen'))
        }

        localStorage.removeItem('activeScreen')

        if (localStorage.getItem('activeScreen') === null) {
          activeScreen = []
        } else {
          activeScreen = JSON.parse(localStorage.getItem('activeScreen'))
        }

        activeScreen.push(['btn-screen-3'])
        localStorage.setItem('activeScreen', JSON.stringify(activeScreen))

        break

      case $('#btn-screen-4').hasClass('screen-active'):
        if (localStorage.getItem('activeScreen') === null) {
          activeScreen = []
        } else {
          activeScreen = JSON.parse(localStorage.getItem('activeScreen'))
        }

        localStorage.removeItem('activeScreen')

        if (localStorage.getItem('activeScreen') === null) {
          activeScreen = []
        } else {
          activeScreen = JSON.parse(localStorage.getItem('activeScreen'))
        }

        activeScreen.push(['btn-screen-4'])
        localStorage.setItem('activeScreen', JSON.stringify(activeScreen))

        break

      case $('#btn-screen-5').hasClass('screen-active'):
        if (localStorage.getItem('activeScreen') === null) {
          activeScreen = []
        } else {
          activeScreen = JSON.parse(localStorage.getItem('activeScreen'))
        }

        localStorage.removeItem('activeScreen')

        if (localStorage.getItem('activeScreen') === null) {
          activeScreen = []
        } else {
          activeScreen = JSON.parse(localStorage.getItem('activeScreen'))
        }

        activeScreen.push(['btn-screen-5'])
        localStorage.setItem('activeScreen', JSON.stringify(activeScreen))

        break

      case $('#btn-screen-6').hasClass('screen-active'):
        if (localStorage.getItem('activeScreen') === null) {
          activeScreen = []
        } else {
          activeScreen = JSON.parse(localStorage.getItem('activeScreen'))
        }

        localStorage.removeItem('activeScreen')

        if (localStorage.getItem('activeScreen') === null) {
          activeScreen = []
        } else {
          activeScreen = JSON.parse(localStorage.getItem('activeScreen'))
        }

        activeScreen.push(['btn-screen-6'])
        localStorage.setItem('activeScreen', JSON.stringify(activeScreen))

        break

      case $('#btn-screen-7').hasClass('screen-active'):
        if (localStorage.getItem('activeScreen') === null) {
          activeScreen = []
        } else {
          activeScreen = JSON.parse(localStorage.getItem('activeScreen'))
        }

        localStorage.removeItem('activeScreen')

        if (localStorage.getItem('activeScreen') === null) {
          activeScreen = []
        } else {
          activeScreen = JSON.parse(localStorage.getItem('activeScreen'))
        }

        activeScreen.push(['btn-screen-7'])
        localStorage.setItem('activeScreen', JSON.stringify(activeScreen))

        break

      case $('#btn-screen-8').hasClass('screen-active'):
        if (localStorage.getItem('activeScreen') === null) {
          activeScreen = []
        } else {
          activeScreen = JSON.parse(localStorage.getItem('activeScreen'))
        }

        localStorage.removeItem('activeScreen')

        if (localStorage.getItem('activeScreen') === null) {
          activeScreen = []
        } else {
          activeScreen = JSON.parse(localStorage.getItem('activeScreen'))
        }

        activeScreen.push(['btn-screen-8'])
        localStorage.setItem('activeScreen', JSON.stringify(activeScreen))

        break

      case $('#btn-screen-9').hasClass('screen-active'):
        if (localStorage.getItem('activeScreen') === null) {
          activeScreen = []
        } else {
          activeScreen = JSON.parse(localStorage.getItem('activeScreen'))
        }

        localStorage.removeItem('activeScreen')

        if (localStorage.getItem('activeScreen') === null) {
          activeScreen = []
        } else {
          activeScreen = JSON.parse(localStorage.getItem('activeScreen'))
        }

        activeScreen.push(['btn-screen-9'])
        localStorage.setItem('activeScreen', JSON.stringify(activeScreen))

        break

    }
    updateTitle()
    updateMonto()
    $('.compras-list').empty()
    getCompras()

  }

  document.querySelectorAll('.btn-screens').forEach(button => {
    button.onclick = buttonClicked;
  });

  /* ///////////////////////////////////////////////////////////////// */
  /* CHECKEAR QUE FUNCIONEN LOS BOTONES */
  /* ///////////////////////////////////////////////////////////////// */
  let checkClass = () => {
    switch (true) {
      case $('#btn-screen-1').hasClass('screen-active'):
        console.log('btn-1 tiene')
        break
      case $('#btn-screen-2').hasClass('screen-active'):
        console.log('btn-2 tiene')
        break
      case $('#btn-screen-3').hasClass('screen-active'):
        console.log('btn-3 tiene')
        break
      case $('#btn-screen-4').hasClass('screen-active'):
        console.log('btn-4 tiene')
        break
      case $('#btn-screen-5').hasClass('screen-active'):
        console.log('btn-5 tiene')
        break
      case $('#btn-screen-6').hasClass('screen-active'):
        console.log('btn-6 tiene')
        break
      case $('#btn-screen-7').hasClass('screen-active'):
        console.log('btn-7 tiene')
        break
      case $('#btn-screen-8').hasClass('screen-active'):
        console.log('btn-8 tiene')
        break
      case $('#btn-screen-9').hasClass('screen-active'):
        console.log('btn-9 tiene')
        break
      case $('#btn-screen-10').hasClass('screen-active'):
        console.log('btn-10 tiene')
        break
      case $('#btn-screen-11').hasClass('screen-active'):
        console.log('btn-11 tiene')
        break
      case $('#btn-screen-12').hasClass('screen-active'):
        console.log('btn-12 tiene')
        break
      case $('#btn-screen-13').hasClass('screen-active'):
        console.log('btn-13 tiene')
        break
    }
  }
  checkClass()

  /* ////////////////////////////////////////////////////////////////// */
  /* LOCAL STORAGE SAVE TITULO */
  /* ////////////////////////////////////////////////////////////////// */
  function saveMainTitle(title) {

    switch (true) {
      case $('#btn-screen-1').hasClass('screen-active'):

        let mainTitle;
        if (localStorage.getItem('mainTitle') === null) {
          mainTitle = []
        } else {
          mainTitle = JSON.parse(localStorage.getItem('mainTitle'))
        }
        localStorage.removeItem('mainTitle')
        if (localStorage.getItem('mainTitle') === null) {
          mainTitle = []
        } else {
          mainTitle = JSON.parse(localStorage.getItem('mainTitle'))
        }
        mainTitle.push([title])
        localStorage.setItem('mainTitle', JSON.stringify(title))

        break

      case $('#btn-screen-2').hasClass('screen-active'):

        let mainTitle2;
        if (localStorage.getItem('mainTitle2') === null) {
          mainTitle2 = []
        } else {
          mainTitle2 = JSON.parse(localStorage.getItem('mainTitle2'))
        }
        localStorage.removeItem('mainTitle2')
        if (localStorage.getItem('mainTitle2') === null) {
          mainTitle2 = []
        } else {
          mainTitle2 = JSON.parse(localStorage.getItem('mainTitle2'))
        }
        mainTitle2.push([title])
        localStorage.setItem('mainTitle2', JSON.stringify(title))

        break

      case $('#btn-screen-3').hasClass('screen-active'):

        let mainTitle3;
        if (localStorage.getItem('mainTitle3') === null) {
          mainTitle3 = []
        } else {
          mainTitle3 = JSON.parse(localStorage.getItem('mainTitle3'))
        }
        localStorage.removeItem('mainTitle3')
        if (localStorage.getItem('mainTitle3') === null) {
          mainTitle3 = []
        } else {
          mainTitle3 = JSON.parse(localStorage.getItem('mainTitle3'))
        }
        mainTitle3.push([title])
        localStorage.setItem('mainTitle3', JSON.stringify(title))

        break

      case $('#btn-screen-4').hasClass('screen-active'):

        let mainTitle4;
        if (localStorage.getItem('mainTitle4') === null) {
          mainTitle4 = []
        } else {
          mainTitle4 = JSON.parse(localStorage.getItem('mainTitle4'))
        }
        localStorage.removeItem('mainTitle4')
        if (localStorage.getItem('mainTitle4') === null) {
          mainTitle4 = []
        } else {
          mainTitle4 = JSON.parse(localStorage.getItem('mainTitle4'))
        }
        mainTitle4.push([title])
        localStorage.setItem('mainTitle4', JSON.stringify(title))

        break

      case $('#btn-screen-5').hasClass('screen-active'):

        let mainTitle5;
        if (localStorage.getItem('mainTitle5') === null) {
          mainTitle5 = []
        } else {
          mainTitle5 = JSON.parse(localStorage.getItem('mainTitle5'))
        }
        localStorage.removeItem('mainTitle5')
        if (localStorage.getItem('mainTitle5') === null) {
          mainTitle5 = []
        } else {
          mainTitle5 = JSON.parse(localStorage.getItem('mainTitle5'))
        }
        mainTitle5.push([title])
        localStorage.setItem('mainTitle5', JSON.stringify(title))

        break

      case $('#btn-screen-6').hasClass('screen-active'):

        let mainTitle6;
        if (localStorage.getItem('mainTitle6') === null) {
          mainTitle6 = []
        } else {
          mainTitle6 = JSON.parse(localStorage.getItem('mainTitle6'))
        }
        localStorage.removeItem('mainTitle6')
        if (localStorage.getItem('mainTitle6') === null) {
          mainTitle6 = []
        } else {
          mainTitle6 = JSON.parse(localStorage.getItem('mainTitle6'))
        }
        mainTitle6.push([title])
        localStorage.setItem('mainTitle6', JSON.stringify(title))

        break

      case $('#btn-screen-7').hasClass('screen-active'):

        let mainTitle7;
        if (localStorage.getItem('mainTitle7') === null) {
          mainTitle7 = []
        } else {
          mainTitle7 = JSON.parse(localStorage.getItem('mainTitle7'))
        }
        localStorage.removeItem('mainTitle7')
        if (localStorage.getItem('mainTitle7') === null) {
          mainTitle7 = []
        } else {
          mainTitle7 = JSON.parse(localStorage.getItem('mainTitle7'))
        }
        mainTitle7.push([title])
        localStorage.setItem('mainTitle7', JSON.stringify(title))

        break

      case $('#btn-screen-8').hasClass('screen-active'):

        let mainTitle8;
        if (localStorage.getItem('mainTitle8') === null) {
          mainTitle8 = []
        } else {
          mainTitle8 = JSON.parse(localStorage.getItem('mainTitle8'))
        }
        localStorage.removeItem('mainTitle8')
        if (localStorage.getItem('mainTitle8') === null) {
          mainTitle8 = []
        } else {
          mainTitle8 = JSON.parse(localStorage.getItem('mainTitle8'))
        }
        mainTitle8.push([title])
        localStorage.setItem('mainTitle8', JSON.stringify(title))

        break

      case $('#btn-screen-9').hasClass('screen-active'):

        let mainTitle9;
        if (localStorage.getItem('mainTitle9') === null) {
          mainTitle9 = []
        } else {
          mainTitle9 = JSON.parse(localStorage.getItem('mainTitle9'))
        }
        localStorage.removeItem('mainTitle9')
        if (localStorage.getItem('mainTitle9') === null) {
          mainTitle9 = []
        } else {
          mainTitle9 = JSON.parse(localStorage.getItem('mainTitle9'))
        }
        mainTitle9.push([title])
        localStorage.setItem('mainTitle9', JSON.stringify(title))

        break

      case $('#btn-screen-10').hasClass('screen-active'):

        let mainTitle10;
        if (localStorage.getItem('mainTitle10') === null) {
          mainTitle10 = []
        } else {
          mainTitle10 = JSON.parse(localStorage.getItem('mainTitle10'))
        }
        localStorage.removeItem('mainTitle10')
        if (localStorage.getItem('mainTitle10') === null) {
          mainTitle10 = []
        } else {
          mainTitle10 = JSON.parse(localStorage.getItem('mainTitle10'))
        }
        mainTitle10.push([title])
        localStorage.setItem('mainTitle10', JSON.stringify(title))

        break

      case $('#btn-screen-11').hasClass('screen-active'):

        let mainTitle11;
        if (localStorage.getItem('mainTitle11') === null) {
          mainTitle11 = []
        } else {
          mainTitle11 = JSON.parse(localStorage.getItem('mainTitle11'))
        }
        localStorage.removeItem('mainTitle11')
        if (localStorage.getItem('mainTitle11') === null) {
          mainTitle11 = []
        } else {
          mainTitle11 = JSON.parse(localStorage.getItem('mainTitle11'))
        }
        mainTitle11.push([title])
        localStorage.setItem('mainTitle11', JSON.stringify(title))

        break

      case $('#btn-screen-12').hasClass('screen-active'):

        let mainTitle12;
        if (localStorage.getItem('mainTitle12') === null) {
          mainTitle12 = []
        } else {
          mainTitle12 = JSON.parse(localStorage.getItem('mainTitle12'))
        }
        localStorage.removeItem('mainTitle12')
        if (localStorage.getItem('mainTitle12') === null) {
          mainTitle12 = []
        } else {
          mainTitle12 = JSON.parse(localStorage.getItem('mainTitle12'))
        }
        mainTitle12.push([title])
        localStorage.setItem('mainTitle12', JSON.stringify(title))

        break

      case $('#btn-screen-13').hasClass('screen-active'):

        let mainTitle13;
        if (localStorage.getItem('mainTitle13') === null) {
          mainTitle13 = []
        } else {
          mainTitle13 = JSON.parse(localStorage.getItem('mainTitle13'))
        }
        localStorage.removeItem('mainTitle13')
        if (localStorage.getItem('mainTitle13') === null) {
          mainTitle13 = []
        } else {
          mainTitle13 = JSON.parse(localStorage.getItem('mainTitle13'))
        }
        mainTitle13.push([title])
        localStorage.setItem('mainTitle13', JSON.stringify(title))

        break

    }
  }
  // }
  // }
  // }
  // }

  $('#title-btn-ok').click(function () {
    saveMainTitle($('#input-title')[0].value)
  })

  /* ////////////////////////////////////////////////////////////////// */
  /* FUNCION TOMAR TITULO DEL LOCAL STORAGE */
  /* ////////////////////////////////////////////////////////////////// */
  function updateTitle() {

    switch (true) {
      case $('#btn-screen-1').hasClass('screen-active'):

        let mainTitle;
        if (localStorage.getItem('mainTitle') === null) {
          mainTitle = []
        } else {
          mainTitle = JSON.parse(localStorage.getItem('mainTitle'))
        }
        $('.presupuesto-titulo')[0].innerHTML = mainTitle
        break

      case $('#btn-screen-2').hasClass('screen-active'):

        let mainTitle2;
        if (localStorage.getItem('mainTitle2') === null) {
          mainTitle2 = []
        } else {
          mainTitle2 = JSON.parse(localStorage.getItem('mainTitle2'))
        }
        $('.presupuesto-titulo')[0].innerHTML = mainTitle2
        break

      case $('#btn-screen-3').hasClass('screen-active'):

        let mainTitle3;
        if (localStorage.getItem('mainTitle3') === null) {
          mainTitle3 = []
        } else {
          mainTitle3 = JSON.parse(localStorage.getItem('mainTitle3'))
        }
        $('.presupuesto-titulo')[0].innerHTML = mainTitle3
        break

      case $('#btn-screen-4').hasClass('screen-active'):

        let mainTitle4;
        if (localStorage.getItem('mainTitle4') === null) {
          mainTitle4 = []
        } else {
          mainTitle4 = JSON.parse(localStorage.getItem('mainTitle4'))
        }
        $('.presupuesto-titulo')[0].innerHTML = mainTitle4
        break

      case $('#btn-screen-5').hasClass('screen-active'):

        let mainTitle5;
        if (localStorage.getItem('mainTitle5') === null) {
          mainTitle5 = []
        } else {
          mainTitle5 = JSON.parse(localStorage.getItem('mainTitle5'))
        }
        $('.presupuesto-titulo')[0].innerHTML = mainTitle5
        break

      case $('#btn-screen-6').hasClass('screen-active'):

        let mainTitle6;
        if (localStorage.getItem('mainTitle6') === null) {
          mainTitle6 = []
        } else {
          mainTitle6 = JSON.parse(localStorage.getItem('mainTitle6'))
        }
        $('.presupuesto-titulo')[0].innerHTML = mainTitle6
        break

      case $('#btn-screen-7').hasClass('screen-active'):

        let mainTitle7;
        if (localStorage.getItem('mainTitle7') === null) {
          mainTitle7 = []
        } else {
          mainTitle7 = JSON.parse(localStorage.getItem('mainTitle7'))
        }
        $('.presupuesto-titulo')[0].innerHTML = mainTitle7
        break

      case $('#btn-screen-8').hasClass('screen-active'):

        let mainTitle8;
        if (localStorage.getItem('mainTitle8') === null) {
          mainTitle8 = []
        } else {
          mainTitle8 = JSON.parse(localStorage.getItem('mainTitle8'))
        }
        $('.presupuesto-titulo')[0].innerHTML = mainTitle8
        break

      case $('#btn-screen-9').hasClass('screen-active'):

        let mainTitle9;
        if (localStorage.getItem('mainTitle9') === null) {
          mainTitle9 = []
        } else {
          mainTitle9 = JSON.parse(localStorage.getItem('mainTitle9'))
        }
        $('.presupuesto-titulo')[0].innerHTML = mainTitle9
        break

      case $('#btn-screen-10').hasClass('screen-active'):

        let mainTitle10;
        if (localStorage.getItem('mainTitle10') === null) {
          mainTitle10 = []
        } else {
          mainTitle10 = JSON.parse(localStorage.getItem('mainTitle10'))
        }
        $('.presupuesto-titulo')[0].innerHTML = mainTitle10
        break

      case $('#btn-screen-11').hasClass('screen-active'):

        let mainTitle11;
        if (localStorage.getItem('mainTitle11') === null) {
          mainTitle11 = []
        } else {
          mainTitle11 = JSON.parse(localStorage.getItem('mainTitle11'))
        }
        $('.presupuesto-titulo')[0].innerHTML = mainTitle11
        break

      case $('#btn-screen-12').hasClass('screen-active'):

        let mainTitle12;
        if (localStorage.getItem('mainTitle12') === null) {
          mainTitle12 = []
        } else {
          mainTitle12 = JSON.parse(localStorage.getItem('mainTitle12'))
        }
        $('.presupuesto-titulo')[0].innerHTML = mainTitle12
        break

      case $('#btn-screen-13').hasClass('screen-active'):

        let mainTitle13;
        if (localStorage.getItem('mainTitle13') === null) {
          mainTitle13 = []
        } else {
          mainTitle13 = JSON.parse(localStorage.getItem('mainTitle13'))
        }
        $('.presupuesto-titulo')[0].innerHTML = mainTitle13
        break
    }
  }

  /* ////////////////////////////////////////////////////////////////// */
  /* LOCAL STORAGE SAVE MONTO BASE */
  /* ////////////////////////////////////////////////////////////////// */
  function saveMontoBase(monto) {

    switch (true) {

      case $('#btn-screen-1').hasClass('screen-active'):

        let montoBase;
        if (localStorage.getItem('montoBase') === null) {
          montoBase = []
        } else {
          montoBase = JSON.parse(localStorage.getItem('montoBase'))
        }
        localStorage.removeItem('montoBase')
        if (localStorage.getItem('montoBase') === null) {
          montoBase = []
        } else {
          montoBase = JSON.parse(localStorage.getItem('montoBase'))
        }
        montoBase.push([monto])
        localStorage.setItem('montoBase', JSON.stringify(monto))

        break

      case $('#btn-screen-2').hasClass('screen-active'):

        let montoBase2;
        if (localStorage.getItem('montoBase2') === null) {
          montoBase2 = []
        } else {
          montoBase2 = JSON.parse(localStorage.getItem('montoBase2'))
        }
        localStorage.removeItem('montoBase2')
        if (localStorage.getItem('montoBase2') === null) {
          montoBase2 = []
        } else {
          montoBase2 = JSON.parse(localStorage.getItem('montoBase2'))
        }
        montoBase2.push([monto])
        localStorage.setItem('montoBase2', JSON.stringify(monto))

        break

      case $('#btn-screen-3').hasClass('screen-active'):

        let montoBase3;
        if (localStorage.getItem('montoBase3') === null) {
          montoBase3 = []
        } else {
          montoBase3 = JSON.parse(localStorage.getItem('montoBase3'))
        }
        localStorage.removeItem('montoBase3')
        if (localStorage.getItem('montoBase3') === null) {
          montoBase3 = []
        } else {
          montoBase3 = JSON.parse(localStorage.getItem('montoBase3'))
        }
        montoBase3.push([monto])
        localStorage.setItem('montoBase3', JSON.stringify(monto))

        break

      case $('#btn-screen-4').hasClass('screen-active'):

        let montoBase4;
        if (localStorage.getItem('montoBase4') === null) {
          montoBase4 = []
        } else {
          montoBase4 = JSON.parse(localStorage.getItem('montoBase4'))
        }
        localStorage.removeItem('montoBase4')
        if (localStorage.getItem('montoBase4') === null) {
          montoBase4 = []
        } else {
          montoBase4 = JSON.parse(localStorage.getItem('montoBase4'))
        }
        montoBase4.push([monto])
        localStorage.setItem('montoBase4', JSON.stringify(monto))

        break

      case $('#btn-screen-5').hasClass('screen-active'):

        let montoBase5;
        if (localStorage.getItem('montoBase5') === null) {
          montoBase5 = []
        } else {
          montoBase5 = JSON.parse(localStorage.getItem('montoBase5'))
        }
        localStorage.removeItem('montoBase5')
        if (localStorage.getItem('montoBase5') === null) {
          montoBase5 = []
        } else {
          montoBase5 = JSON.parse(localStorage.getItem('montoBase5'))
        }
        montoBase5.push([monto])
        localStorage.setItem('montoBase5', JSON.stringify(monto))

        break

      case $('#btn-screen-6').hasClass('screen-active'):

        let montoBase6;
        if (localStorage.getItem('montoBase6') === null) {
          montoBase6 = []
        } else {
          montoBase6 = JSON.parse(localStorage.getItem('montoBase6'))
        }
        localStorage.removeItem('montoBase6')
        if (localStorage.getItem('montoBase6') === null) {
          montoBase6 = []
        } else {
          montoBase6 = JSON.parse(localStorage.getItem('montoBase6'))
        }
        montoBase6.push([monto])
        localStorage.setItem('montoBase6', JSON.stringify(monto))

        break

      case $('#btn-screen-7').hasClass('screen-active'):

        let montoBase7;
        if (localStorage.getItem('montoBase7') === null) {
          montoBase7 = []
        } else {
          montoBase7 = JSON.parse(localStorage.getItem('montoBase7'))
        }
        localStorage.removeItem('montoBase7')
        if (localStorage.getItem('montoBase7') === null) {
          montoBase7 = []
        } else {
          montoBase7 = JSON.parse(localStorage.getItem('montoBase7'))
        }
        montoBase7.push([monto])
        localStorage.setItem('montoBase7', JSON.stringify(monto))

        break

      case $('#btn-screen-8').hasClass('screen-active'):

        let montoBase8;
        if (localStorage.getItem('montoBase8') === null) {
          montoBase8 = []
        } else {
          montoBase8 = JSON.parse(localStorage.getItem('montoBase8'))
        }
        localStorage.removeItem('montoBase8')
        if (localStorage.getItem('montoBase8') === null) {
          montoBase8 = []
        } else {
          montoBase8 = JSON.parse(localStorage.getItem('montoBase8'))
        }
        montoBase8.push([monto])
        localStorage.setItem('montoBase8', JSON.stringify(monto))

        break

      case $('#btn-screen-9').hasClass('screen-active'):

        let montoBase9;
        if (localStorage.getItem('montoBase9') === null) {
          montoBase9 = []
        } else {
          montoBase9 = JSON.parse(localStorage.getItem('montoBase9'))
        }
        localStorage.removeItem('montoBase9')
        if (localStorage.getItem('montoBase9') === null) {
          montoBase9 = []
        } else {
          montoBase9 = JSON.parse(localStorage.getItem('montoBase9'))
        }
        montoBase9.push([monto])
        localStorage.setItem('montoBase9', JSON.stringify(monto))

        break

      case $('#btn-screen-10').hasClass('screen-active'):

        let montoBase10;
        if (localStorage.getItem('montoBase10') === null) {
          montoBase10 = []
        } else {
          montoBase10 = JSON.parse(localStorage.getItem('montoBase10'))
        }
        localStorage.removeItem('montoBase10')
        if (localStorage.getItem('montoBase10') === null) {
          montoBase10 = []
        } else {
          montoBase10 = JSON.parse(localStorage.getItem('montoBase10'))
        }
        montoBase10.push([monto])
        localStorage.setItem('montoBase10', JSON.stringify(monto))

        break

      case $('#btn-screen-11').hasClass('screen-active'):

        let montoBase11;
        if (localStorage.getItem('montoBase11') === null) {
          montoBase11 = []
        } else {
          montoBase11 = JSON.parse(localStorage.getItem('montoBase11'))
        }
        localStorage.removeItem('montoBase11')
        if (localStorage.getItem('montoBase11') === null) {
          montoBase11 = []
        } else {
          montoBase11 = JSON.parse(localStorage.getItem('montoBase11'))
        }
        montoBase11.push([monto])
        localStorage.setItem('montoBase11', JSON.stringify(monto))

        break

      case $('#btn-screen-12').hasClass('screen-active'):

        let montoBase12;
        if (localStorage.getItem('montoBase12') === null) {
          montoBase12 = []
        } else {
          montoBase12 = JSON.parse(localStorage.getItem('montoBase12'))
        }
        localStorage.removeItem('montoBase12')
        if (localStorage.getItem('montoBase12') === null) {
          montoBase12 = []
        } else {
          montoBase12 = JSON.parse(localStorage.getItem('montoBase12'))
        }
        montoBase12.push([monto])
        localStorage.setItem('montoBase12', JSON.stringify(monto))

        break

      case $('#btn-screen-13').hasClass('screen-active'):

        let montoBase13;
        if (localStorage.getItem('montoBase13') === null) {
          montoBase13 = []
        } else {
          montoBase13 = JSON.parse(localStorage.getItem('montoBase13'))
        }
        localStorage.removeItem('montoBase13')
        if (localStorage.getItem('montoBase13') === null) {
          montoBase13 = []
        } else {
          montoBase13 = JSON.parse(localStorage.getItem('montoBase13'))
        }
        montoBase13.push([monto])
        localStorage.setItem('montoBase13', JSON.stringify(monto))

        break

    }

    updateMonto()

    if (parseInt(resto) < 0) {
      $('#main-presupuesto-resto').addClass('numero-negativo')
      $('#main-presupuesto-resto').removeClass('numero-positivo')
    } else {
      $('#main-presupuesto-resto').addClass('numero-positivo')
      $('#main-presupuesto-resto').removeClass('numero-negativo')
    }
    if (parseInt($('#main-gastado')[0].innerText) > 0) {
      $('#main-gastado').addClass('numero-negativo')
      $('#main-gastado').removeClass('numero-positivo')
    } else {
      $('#main-gastado').addClass('numero-positivo')
      $('#main-gastado').removeClass('numero-negativo')
    }

  }

  $('#base-btn-ok').click(function () {
    if (input_monto_base.value == '' || isNaN(input_monto_base.value)) {
      alert('ingrese un numero valido')
    } else {
      saveMontoBase($('#input-monto-base')[0].value)
    }
  })

  /* ////////////////////////////////////////////////////////////////// */
  /* FUNCION TOMAR MONTO BASE DEL LOCAL STORAGE */
  /* ////////////////////////////////////////////////////////////////// */
  function updateMonto() {

    switch (true) {
      case $('#btn-screen-1').hasClass('screen-active'):

        let montoBase;
        if (localStorage.getItem('montoBase') === null) {
          montoBase = []
        } else {
          montoBase = JSON.parse(localStorage.getItem('montoBase'))
        }
        $('.presupuesto-base')[0].innerHTML = montoBase
        monto_base = montoBase
        resto = parseInt($('#main-presupuesto-resto')[0].innerText)

        break

      case $('#btn-screen-2').hasClass('screen-active'):

        let montoBase2;
        if (localStorage.getItem('montoBase2') === null) {
          montoBase2 = []
        } else {
          montoBase2 = JSON.parse(localStorage.getItem('montoBase2'))
        }
        $('.presupuesto-base')[0].innerHTML = montoBase2
        monto_base = montoBase2
        resto = parseInt($('#main-presupuesto-resto')[0].innerText)

        break

      case $('#btn-screen-3').hasClass('screen-active'):

        let montoBase3;
        if (localStorage.getItem('montoBase3') === null) {
          montoBase3 = []
        } else {
          montoBase3 = JSON.parse(localStorage.getItem('montoBase3'))
        }
        $('.presupuesto-base')[0].innerHTML = montoBase3
        monto_base = montoBase3
        resto = parseInt($('#main-presupuesto-resto')[0].innerText)

        break

      case $('#btn-screen-4').hasClass('screen-active'):

        let montoBase4;
        if (localStorage.getItem('montoBase4') === null) {
          montoBase4 = []
        } else {
          montoBase4 = JSON.parse(localStorage.getItem('montoBase4'))
        }
        $('.presupuesto-base')[0].innerHTML = montoBase4
        monto_base = montoBase4
        resto = parseInt($('#main-presupuesto-resto')[0].innerText)

        break

      case $('#btn-screen-5').hasClass('screen-active'):

        let montoBase5;
        if (localStorage.getItem('montoBase5') === null) {
          montoBase5 = []
        } else {
          montoBase5 = JSON.parse(localStorage.getItem('montoBase5'))
        }
        $('.presupuesto-base')[0].innerHTML = montoBase5
        monto_base = montoBase5
        resto = parseInt($('#main-presupuesto-resto')[0].innerText)

        break

      case $('#btn-screen-6').hasClass('screen-active'):

        let montoBase6;
        if (localStorage.getItem('montoBase6') === null) {
          montoBase6 = []
        } else {
          montoBase6 = JSON.parse(localStorage.getItem('montoBase6'))
        }
        $('.presupuesto-base')[0].innerHTML = montoBase6
        monto_base = montoBase6
        resto = parseInt($('#main-presupuesto-resto')[0].innerText)

        break

      case $('#btn-screen-7').hasClass('screen-active'):

        let montoBase7;
        if (localStorage.getItem('montoBase7') === null) {
          montoBase7 = []
        } else {
          montoBase7 = JSON.parse(localStorage.getItem('montoBase7'))
        }
        $('.presupuesto-base')[0].innerHTML = montoBase7
        monto_base = montoBase7
        resto = parseInt($('#main-presupuesto-resto')[0].innerText)

        break

      case $('#btn-screen-8').hasClass('screen-active'):

        let montoBase8;
        if (localStorage.getItem('montoBase8') === null) {
          montoBase8 = []
        } else {
          montoBase8 = JSON.parse(localStorage.getItem('montoBase8'))
        }
        $('.presupuesto-base')[0].innerHTML = montoBase8
        monto_base = montoBase8
        resto = parseInt($('#main-presupuesto-resto')[0].innerText)

        break

      case $('#btn-screen-9').hasClass('screen-active'):

        let montoBase9;
        if (localStorage.getItem('montoBase9') === null) {
          montoBase9 = []
        } else {
          montoBase9 = JSON.parse(localStorage.getItem('montoBase9'))
        }
        $('.presupuesto-base')[0].innerHTML = montoBase9
        monto_base = montoBase9
        resto = parseInt($('#main-presupuesto-resto')[0].innerText)

        break

      case $('#btn-screen-10').hasClass('screen-active'):

        let montoBase10;
        if (localStorage.getItem('montoBase10') === null) {
          montoBase10 = []
        } else {
          montoBase10 = JSON.parse(localStorage.getItem('montoBase10'))
        }
        $('.presupuesto-base')[0].innerHTML = montoBase10
        monto_base = montoBase10
        resto = parseInt($('#main-presupuesto-resto')[0].innerText)

        break

      case $('#btn-screen-11').hasClass('screen-active'):

        let montoBase11;
        if (localStorage.getItem('montoBase11') === null) {
          montoBase11 = []
        } else {
          montoBase11 = JSON.parse(localStorage.getItem('montoBase11'))
        }
        $('.presupuesto-base')[0].innerHTML = montoBase11
        monto_base = montoBase11
        resto = parseInt($('#main-presupuesto-resto')[0].innerText)

        break

      case $('#btn-screen-12').hasClass('screen-active'):

        let montoBase12;
        if (localStorage.getItem('montoBase12') === null) {
          montoBase12 = []
        } else {
          montoBase12 = JSON.parse(localStorage.getItem('montoBase12'))
        }
        $('.presupuesto-base')[0].innerHTML = montoBase12
        monto_base = montoBase12
        resto = parseInt($('#main-presupuesto-resto')[0].innerText)

        break

      case $('#btn-screen-13').hasClass('screen-active'):

        let montoBase13;
        if (localStorage.getItem('montoBase13') === null) {
          montoBase13 = []
        } else {
          montoBase13 = JSON.parse(localStorage.getItem('montoBase13'))
        }
        $('.presupuesto-base')[0].innerHTML = montoBase13
        monto_base = montoBase13
        resto = parseInt($('#main-presupuesto-resto')[0].innerText)

        break

    }

    if (parseInt(resto) < 0) {
      $('#main-presupuesto-resto').addClass('numero-negativo')
      $('#main-presupuesto-resto').removeClass('numero-positivo')
    } else {
      $('#main-presupuesto-resto').addClass('numero-positivo')
      $('#main-presupuesto-resto').removeClass('numero-negativo')
    }
    if (parseInt($('#main-gastado')[0].innerText) > 0) {
      $('#main-gastado').addClass('numero-negativo')
      $('#main-gastado').removeClass('numero-positivo')
    } else {
      $('#main-gastado').addClass('numero-positivo')
      $('#main-gastado').removeClass('numero-negativo')
    }
  }

  /* ////////////////////////////////////////////////////////////////// */
  /* EVENTS LISTENERS MODALES Y FUNCIONES */
  /* ////////////////////////////////////////////////////////////////// */

  /* MODAL TITULO */
  title_btn_ok.addEventListener('click', () => {
    event.preventDefault()
    presupuesto_titulo.innerHTML = input_title.value
    input_title.value = ''
  }
  )
  /* MODAL MONTO BASE */
  base_btn_ok.addEventListener('click', () => {
    event.preventDefault()
    updateMonto()
    let resto_actualizado
    let monto_actualizado = 0

    switch (true) {

      case $('#btn-screen-1').hasClass('screen-active'):

        let compras

        console.log('asdasdasda')
        monto_base = parseInt(input_monto_base.value)
        if (localStorage.getItem('compras') === null) {
          compras = []
        } else {
          compras = JSON.parse(localStorage.getItem('compras'))
        }
        compras.forEach(function (compra) {
          parseInt(compra[1])
          monto_actualizado += parseInt(compra[1])
        })
        $('#main-presupuesto-base')[0].innerText = $('#input-monto-base')[0].value
        $('#main-gastado')[0].innerText = monto_actualizado
        resto_actualizado = monto_base - monto_actualizado
        $('#main-presupuesto-resto')[0].innerText = resto_actualizado
        $('#input-monto-base')[0].value = ''

        break

      case $('#btn-screen-2').hasClass('screen-active'):

        let compras2

        console.log('asdasdas')
        monto_base = parseInt(input_monto_base.value)
        if (localStorage.getItem('compras2') === null) {
          compras2 = []
        } else {
          compras2 = JSON.parse(localStorage.getItem('compras2'))
        }
        compras2.forEach(function (compra) {
          parseInt(compra[1])
          monto_actualizado += parseInt(compra[1])
        })
        $('#main-presupuesto-base')[0].innerText = $('#input-monto-base')[0].value
        $('#main-gastado')[0].innerText = monto_actualizado
        resto_actualizado = monto_base - monto_actualizado
        $('#main-presupuesto-resto')[0].innerText = resto_actualizado
        $('#input-monto-base')[0].value = ''

        break

      case $('#btn-screen-3').hasClass('screen-active'):

        let compras3
        console.log('asdasdas')
        monto_base = parseInt(input_monto_base.value)
        if (localStorage.getItem('compras3') === null) {
          compras3 = []
        } else {
          compras3 = JSON.parse(localStorage.getItem('compras3'))
        }
        compras3.forEach(function (compra) {
          parseInt(compra[1])
          monto_actualizado += parseInt(compra[1])
        })
        $('#main-presupuesto-base')[0].innerText = $('#input-monto-base')[0].value
        $('#main-gastado')[0].innerText = monto_actualizado
        resto_actualizado = monto_base - monto_actualizado
        $('#main-presupuesto-resto')[0].innerText = resto_actualizado
        $('#input-monto-base')[0].value = ''

        break

      case $('#btn-screen-4').hasClass('screen-active'):

        let compras4
        console.log('asdasdas')
        monto_base = parseInt(input_monto_base.value)
        if (localStorage.getItem('compras4') === null) {
          compras4 = []
        } else {
          compras4 = JSON.parse(localStorage.getItem('compras4'))
        }
        compras4.forEach(function (compra) {
          parseInt(compra[1])
          monto_actualizado += parseInt(compra[1])
        })
        $('#main-presupuesto-base')[0].innerText = $('#input-monto-base')[0].value
        $('#main-gastado')[0].innerText = monto_actualizado
        resto_actualizado = monto_base - monto_actualizado
        $('#main-presupuesto-resto')[0].innerText = resto_actualizado
        $('#input-monto-base')[0].value = ''

        break

      case $('#btn-screen-5').hasClass('screen-active'):

        let compras5
        console.log('asdasdas')
        monto_base = parseInt(input_monto_base.value)
        if (localStorage.getItem('compras5') === null) {
          compras5 = []
        } else {
          compras5 = JSON.parse(localStorage.getItem('compras5'))
        }
        compras5.forEach(function (compra) {
          parseInt(compra[1])
          monto_actualizado += parseInt(compra[1])
        })
        $('#main-presupuesto-base')[0].innerText = $('#input-monto-base')[0].value
        $('#main-gastado')[0].innerText = monto_actualizado
        resto_actualizado = monto_base - monto_actualizado
        $('#main-presupuesto-resto')[0].innerText = resto_actualizado
        $('#input-monto-base')[0].value = ''

        break

      case $('#btn-screen-6').hasClass('screen-active'):

        let compras6
        console.log('asdasdas')
        monto_base = parseInt(input_monto_base.value)
        if (localStorage.getItem('compras6') === null) {
          compras6 = []
        } else {
          compras6 = JSON.parse(localStorage.getItem('compras6'))
        }
        compras6.forEach(function (compra) {
          parseInt(compra[1])
          monto_actualizado += parseInt(compra[1])
        })
        $('#main-presupuesto-base')[0].innerText = $('#input-monto-base')[0].value
        $('#main-gastado')[0].innerText = monto_actualizado
        resto_actualizado = monto_base - monto_actualizado
        $('#main-presupuesto-resto')[0].innerText = resto_actualizado
        $('#input-monto-base')[0].value = ''

        break

      case $('#btn-screen-7').hasClass('screen-active'):

        let compras7
        console.log('asdasdas')
        monto_base = parseInt(input_monto_base.value)
        if (localStorage.getItem('compras7') === null) {
          compras7 = []
        } else {
          compras7 = JSON.parse(localStorage.getItem('compras7'))
        }
        compras7.forEach(function (compra) {
          parseInt(compra[1])
          monto_actualizado += parseInt(compra[1])
        })
        $('#main-presupuesto-base')[0].innerText = $('#input-monto-base')[0].value
        $('#main-gastado')[0].innerText = monto_actualizado
        resto_actualizado = monto_base - monto_actualizado
        $('#main-presupuesto-resto')[0].innerText = resto_actualizado
        $('#input-monto-base')[0].value = ''

        break

      case $('#btn-screen-8').hasClass('screen-active'):

        let compras8
        console.log('asdasdas')
        monto_base = parseInt(input_monto_base.value)
        if (localStorage.getItem('compras8') === null) {
          compras8 = []
        } else {
          compras8 = JSON.parse(localStorage.getItem('compras8'))
        }
        compras8.forEach(function (compra) {
          parseInt(compra[1])
          monto_actualizado += parseInt(compra[1])
        })
        $('#main-presupuesto-base')[0].innerText = $('#input-monto-base')[0].value
        $('#main-gastado')[0].innerText = monto_actualizado
        resto_actualizado = monto_base - monto_actualizado
        $('#main-presupuesto-resto')[0].innerText = resto_actualizado
        $('#input-monto-base')[0].value = ''

        break

      case $('#btn-screen-9').hasClass('screen-active'):

        let compras9
        console.log('asdasdas')
        monto_base = parseInt(input_monto_base.value)
        if (localStorage.getItem('compras9') === null) {
          compras9 = []
        } else {
          compras9 = JSON.parse(localStorage.getItem('compras9'))
        }
        compras9.forEach(function (compra) {
          parseInt(compra[1])
          monto_actualizado += parseInt(compra[1])
        })
        $('#main-presupuesto-base')[0].innerText = $('#input-monto-base')[0].value
        $('#main-gastado')[0].innerText = monto_actualizado
        resto_actualizado = monto_base - monto_actualizado
        $('#main-presupuesto-resto')[0].innerText = resto_actualizado
        $('#input-monto-base')[0].value = ''

        break

      case $('#btn-screen-10').hasClass('screen-active'):

        let compras10
        console.log('asdasdas')
        monto_base = parseInt(input_monto_base.value)
        if (localStorage.getItem('compras10') === null) {
          compras10 = []
        } else {
          compras10 = JSON.parse(localStorage.getItem('compras10'))
        }
        compras10.forEach(function (compra) {
          parseInt(compra[1])
          monto_actualizado += parseInt(compra[1])
        })
        $('#main-presupuesto-base')[0].innerText = $('#input-monto-base')[0].value
        $('#main-gastado')[0].innerText = monto_actualizado
        resto_actualizado = monto_base - monto_actualizado
        $('#main-presupuesto-resto')[0].innerText = resto_actualizado
        $('#input-monto-base')[0].value = ''

        break

      case $('#btn-screen-11').hasClass('screen-active'):

        let compras11
        console.log('asdasdas')
        monto_base = parseInt(input_monto_base.value)
        if (localStorage.getItem('compras11') === null) {
          compras11 = []
        } else {
          compras11 = JSON.parse(localStorage.getItem('compras11'))
        }
        compras11.forEach(function (compra) {
          parseInt(compra[1])
          monto_actualizado += parseInt(compra[1])
        })
        $('#main-presupuesto-base')[0].innerText = $('#input-monto-base')[0].value
        $('#main-gastado')[0].innerText = monto_actualizado
        resto_actualizado = monto_base - monto_actualizado
        $('#main-presupuesto-resto')[0].innerText = resto_actualizado
        $('#input-monto-base')[0].value = ''

        break

      case $('#btn-screen-12').hasClass('screen-active'):

        let compras12
        console.log('asdasdas')
        monto_base = parseInt(input_monto_base.value)
        if (localStorage.getItem('compras12') === null) {
          compras12 = []
        } else {
          compras12 = JSON.parse(localStorage.getItem('compras12'))
        }
        compras12.forEach(function (compra) {
          parseInt(compra[1])
          monto_actualizado += parseInt(compra[1])
        })
        $('#main-presupuesto-base')[0].innerText = $('#input-monto-base')[0].value
        $('#main-gastado')[0].innerText = monto_actualizado
        resto_actualizado = monto_base - monto_actualizado
        $('#main-presupuesto-resto')[0].innerText = resto_actualizado
        $('#input-monto-base')[0].value = ''

        break

      case $('#btn-screen-13').hasClass('screen-active'):

        let compras13
        console.log('asdasdas')
        monto_base = parseInt(input_monto_base.value)
        if (localStorage.getItem('compras13') === null) {
          compras13 = []
        } else {
          compras13 = JSON.parse(localStorage.getItem('compras13'))
        }
        compras13.forEach(function (compra) {
          parseInt(compra[1])
          monto_actualizado += parseInt(compra[1])
        })
        $('#main-presupuesto-base')[0].innerText = $('#input-monto-base')[0].value
        $('#main-gastado')[0].innerText = monto_actualizado
        resto_actualizado = monto_base - monto_actualizado
        $('#main-presupuesto-resto')[0].innerText = resto_actualizado
        $('#input-monto-base')[0].value = ''

        break

    }

    updateMonto()

    if (parseInt(resto) < 0) {
      $('#main-presupuesto-resto').addClass('numero-negativo')
      $('#main-presupuesto-resto').removeClass('numero-positivo')
    } else {
      $('#main-presupuesto-resto').addClass('numero-positivo')
      $('#main-presupuesto-resto').removeClass('numero-negativo')
    }
    if (parseInt($('#main-gastado')[0].innerText) > 0) {
      $('#main-gastado').addClass('numero-negativo')
      $('#main-gastado').removeClass('numero-positivo')
    } else {
      $('#main-gastado').addClass('numero-positivo')
      $('#main-gastado').removeClass('numero-negativo')
    }

  }
  )

  /* ////////////////////////////////////////////////////////////////// */
  /* MODAL NUEVA COMPRA */
  compra_btn_ok.onclick = () => {
    event.preventDefault()
    // CORROBORAR QUE NO HAYA CAMPOS VACIOS
    if (input_compra_name.value == '' || input_compra_monto.value == '') {
      alert('No deje campos vacios')
    } else if (isNaN(input_compra_monto.value)) {
      alert('Valor incorrecto')
    } else {
      // CREAR NUEVA COMPRA
      const compraNueva = document.createElement('div')
      compraNueva.classList.add('compra-nueva')
      // CREAR NUEVO LI MONTO
      const compraMonto = document.createElement('li')
      compraMonto.innerText = input_compra_monto.value
      if (input_compra_monto.value < 0) {
        compraMonto.classList.add('numero-positivo')
      } else {
        compraMonto.classList.add('numero-negativo')
      }
      compraMonto.classList.add('compra-monto')
      compraNueva.appendChild(compraMonto)
      // CREAR NUEVO LI ITEM
      const compraItem = document.createElement('li')
      compraItem.innerText = input_compra_name.value
      compraItem.classList.add('compra-item')
      compraNueva.appendChild(compraItem)
      /* ///////////////////////// */
      /* LOCAL STORAGE SAVE */
      saveCompraLocal(input_compra_name.value, input_compra_monto.value)
      // CREAR NUEVO TRASH BUTTON
      const trashButton = document.createElement('button')
      trashButton.innerHTML = '<i class="fas fa-trash"></i>'
      trashButton.classList.add('trash-btn')
      compraNueva.appendChild(trashButton)
      // COMPRA NUEVA COMO NUEVO ITEM EN LA LISTA
      compras_list.appendChild(compraNueva)
      // BORRAR DATOS DE LOS VALUES
      input_compra_monto.value = ''
      input_compra_name.value = ''
      // ACTUALIZAR VISUALMENTE LA COMPRA
      updateMonto()

      let resto_actualizado
      let monto_actualizado = 0

      switch (true) {

        case $('#btn-screen-1').hasClass('screen-active'):

          let compras

          monto_base = parseInt(input_monto_base.value)
          if (localStorage.getItem('compras') === null) {
            compras = []
          } else {
            compras = JSON.parse(localStorage.getItem('compras'))
          }
          compras.forEach(function (compra) {
            parseInt(compra[1])
            monto_actualizado += parseInt(compra[1])
          })
          $('#main-presupuesto-base')[0].innerText = $('#input-monto-base')[0].value
          $('#main-gastado')[0].innerText = monto_actualizado
          resto_actualizado = monto_base - monto_actualizado
          $('#main-presupuesto-resto')[0].innerText = resto_actualizado

          break

        case $('#btn-screen-2').hasClass('screen-active'):

          let compras2

          monto_base = parseInt(input_monto_base.value)
          if (localStorage.getItem('compras2') === null) {
            compras2 = []
          } else {
            compras2 = JSON.parse(localStorage.getItem('compras2'))
          }
          compras2.forEach(function (compra) {
            parseInt(compra[1])
            monto_actualizado += parseInt(compra[1])
          })
          $('#main-presupuesto-base')[0].innerText = $('#input-monto-base')[0].value
          $('#main-gastado')[0].innerText = monto_actualizado
          resto_actualizado = monto_base - monto_actualizado
          $('#main-presupuesto-resto')[0].innerText = resto_actualizado

          break

        case $('#btn-screen-3').hasClass('screen-active'):

          let compras3
          monto_base = parseInt(input_monto_base.value)
          if (localStorage.getItem('compras3') === null) {
            compras3 = []
          } else {
            compras3 = JSON.parse(localStorage.getItem('compras3'))
          }
          compras3.forEach(function (compra) {
            parseInt(compra[1])
            monto_actualizado += parseInt(compra[1])
          })
          $('#main-presupuesto-base')[0].innerText = $('#input-monto-base')[0].value
          $('#main-gastado')[0].innerText = monto_actualizado
          resto_actualizado = monto_base - monto_actualizado
          $('#main-presupuesto-resto')[0].innerText = resto_actualizado

          break

        case $('#btn-screen-4').hasClass('screen-active'):

          let compras4
          monto_base = parseInt(input_monto_base.value)
          if (localStorage.getItem('compras4') === null) {
            compras4 = []
          } else {
            compras4 = JSON.parse(localStorage.getItem('compras4'))
          }
          compras4.forEach(function (compra) {
            parseInt(compra[1])
            monto_actualizado += parseInt(compra[1])
          })
          $('#main-presupuesto-base')[0].innerText = $('#input-monto-base')[0].value
          $('#main-gastado')[0].innerText = monto_actualizado
          resto_actualizado = monto_base - monto_actualizado
          $('#main-presupuesto-resto')[0].innerText = resto_actualizado

          break

        case $('#btn-screen-5').hasClass('screen-active'):

          let compras5
          monto_base = parseInt(input_monto_base.value)
          if (localStorage.getItem('compras5') === null) {
            compras5 = []
          } else {
            compras5 = JSON.parse(localStorage.getItem('compras5'))
          }
          compras5.forEach(function (compra) {
            parseInt(compra[1])
            monto_actualizado += parseInt(compra[1])
          })
          $('#main-presupuesto-base')[0].innerText = $('#input-monto-base')[0].value
          $('#main-gastado')[0].innerText = monto_actualizado
          resto_actualizado = monto_base - monto_actualizado
          $('#main-presupuesto-resto')[0].innerText = resto_actualizado

          break

        case $('#btn-screen-6').hasClass('screen-active'):

          let compras6
          monto_base = parseInt(input_monto_base.value)
          if (localStorage.getItem('compras6') === null) {
            compras6 = []
          } else {
            compras6 = JSON.parse(localStorage.getItem('compras6'))
          }
          compras6.forEach(function (compra) {
            parseInt(compra[1])
            monto_actualizado += parseInt(compra[1])
          })
          $('#main-presupuesto-base')[0].innerText = $('#input-monto-base')[0].value
          $('#main-gastado')[0].innerText = monto_actualizado
          resto_actualizado = monto_base - monto_actualizado
          $('#main-presupuesto-resto')[0].innerText = resto_actualizado

          break

        case $('#btn-screen-7').hasClass('screen-active'):

          let compras7
          monto_base = parseInt(input_monto_base.value)
          if (localStorage.getItem('compras7') === null) {
            compras7 = []
          } else {
            compras7 = JSON.parse(localStorage.getItem('compras7'))
          }
          compras7.forEach(function (compra) {
            parseInt(compra[1])
            monto_actualizado += parseInt(compra[1])
          })
          $('#main-presupuesto-base')[0].innerText = $('#input-monto-base')[0].value
          $('#main-gastado')[0].innerText = monto_actualizado
          resto_actualizado = monto_base - monto_actualizado
          $('#main-presupuesto-resto')[0].innerText = resto_actualizado

          break

        case $('#btn-screen-8').hasClass('screen-active'):

          let compras8
          monto_base = parseInt(input_monto_base.value)
          if (localStorage.getItem('compras8') === null) {
            compras8 = []
          } else {
            compras8 = JSON.parse(localStorage.getItem('compras8'))
          }
          compras8.forEach(function (compra) {
            parseInt(compra[1])
            monto_actualizado += parseInt(compra[1])
          })
          $('#main-presupuesto-base')[0].innerText = $('#input-monto-base')[0].value
          $('#main-gastado')[0].innerText = monto_actualizado
          resto_actualizado = monto_base - monto_actualizado
          $('#main-presupuesto-resto')[0].innerText = resto_actualizado

          break

        case $('#btn-screen-9').hasClass('screen-active'):

          let compras9
          monto_base = parseInt(input_monto_base.value)
          if (localStorage.getItem('compras9') === null) {
            compras9 = []
          } else {
            compras9 = JSON.parse(localStorage.getItem('compras9'))
          }
          compras9.forEach(function (compra) {
            parseInt(compra[1])
            monto_actualizado += parseInt(compra[1])
          })
          $('#main-presupuesto-base')[0].innerText = $('#input-monto-base')[0].value
          $('#main-gastado')[0].innerText = monto_actualizado
          resto_actualizado = monto_base - monto_actualizado
          $('#main-presupuesto-resto')[0].innerText = resto_actualizado

          break

        case $('#btn-screen-10').hasClass('screen-active'):

          let compras10
          monto_base = parseInt(input_monto_base.value)
          if (localStorage.getItem('compras10') === null) {
            compras10 = []
          } else {
            compras10 = JSON.parse(localStorage.getItem('compras10'))
          }
          compras10.forEach(function (compra) {
            parseInt(compra[1])
            monto_actualizado += parseInt(compra[1])
          })
          $('#main-presupuesto-base')[0].innerText = $('#input-monto-base')[0].value
          $('#main-gastado')[0].innerText = monto_actualizado
          resto_actualizado = monto_base - monto_actualizado
          $('#main-presupuesto-resto')[0].innerText = resto_actualizado

          break

        case $('#btn-screen-11').hasClass('screen-active'):

          let compras11
          monto_base = parseInt(input_monto_base.value)
          if (localStorage.getItem('compras11') === null) {
            compras11 = []
          } else {
            compras11 = JSON.parse(localStorage.getItem('compras11'))
          }
          compras11.forEach(function (compra) {
            parseInt(compra[1])
            monto_actualizado += parseInt(compra[1])
          })
          $('#main-presupuesto-base')[0].innerText = $('#input-monto-base')[0].value
          $('#main-gastado')[0].innerText = monto_actualizado
          resto_actualizado = monto_base - monto_actualizado
          $('#main-presupuesto-resto')[0].innerText = resto_actualizado

          break

        case $('#btn-screen-12').hasClass('screen-active'):

          let compras12
          monto_base = parseInt(input_monto_base.value)
          if (localStorage.getItem('compras12') === null) {
            compras12 = []
          } else {
            compras12 = JSON.parse(localStorage.getItem('compras12'))
          }
          compras12.forEach(function (compra) {
            parseInt(compra[1])
            monto_actualizado += parseInt(compra[1])
          })
          $('#main-presupuesto-base')[0].innerText = $('#input-monto-base')[0].value
          $('#main-gastado')[0].innerText = monto_actualizado
          resto_actualizado = monto_base - monto_actualizado
          $('#main-presupuesto-resto')[0].innerText = resto_actualizado

          break

        case $('#btn-screen-13').hasClass('screen-active'):

          let compras13
          monto_base = parseInt(input_monto_base.value)
          if (localStorage.getItem('compras13') === null) {
            compras13 = []
          } else {
            compras13 = JSON.parse(localStorage.getItem('compras13'))
          }
          compras13.forEach(function (compra) {
            parseInt(compra[1])
            monto_actualizado += parseInt(compra[1])
          })
          $('#main-presupuesto-base')[0].innerText = $('#input-monto-base')[0].value
          $('#main-gastado')[0].innerText = monto_actualizado
          resto_actualizado = monto_base - monto_actualizado
          $('#main-presupuesto-resto')[0].innerText = resto_actualizado

          break

      }

      updateMonto()

      if (parseInt(resto) < 0) {
        $('#main-presupuesto-resto').addClass('numero-negativo')
        $('#main-presupuesto-resto').removeClass('numero-positivo')
      } else {
        $('#main-presupuesto-resto').addClass('numero-positivo')
        $('#main-presupuesto-resto').removeClass('numero-negativo')
      }
      if (parseInt($('#main-gastado')[0].innerText) > 0) {
        $('#main-gastado').addClass('numero-negativo')
        $('#main-gastado').removeClass('numero-positivo')
      } else {
        $('#main-gastado').addClass('numero-positivo')
        $('#main-gastado').removeClass('numero-negativo')
      }

      // let compras
      // compras = JSON.parse(localStorage.getItem('compras'))
      // let montoTotal = 0

      // compras.forEach(function (compra) {
      //   montoTotal += parseInt(compra[1])
      // })
      // $('#main-gastado')[0].innerText = montoTotal
      // let montoBase
      // if (localStorage.getItem('montoBase') === null) {
      //   montoBase = []
      // } else {
      //   montoBase = JSON.parse(localStorage.getItem('montoBase'))
      // }

      // let resto_actualizadoooo = parseInt(montoBase - $('#main-gastado')[0].innerText)
      // console.log('------------- ' + resto_actualizadoooo)
      // $('#main-presupuesto-resto')[0].innerText = resto_actualizadoooo


      updateMonto()

      $('.compras-list').empty()

      getCompras()
    }
  }

  /* ////////////////////////////////////////////////////////////////// */
  /* BORRAR COMPRAS */
  /* ////////////////////////////////////////////////////////////////// */
  /* BORRAR COSAS DEL CSS VISUALMENTE */
  compras_list.addEventListener('click', deleteCompra)

  function deleteCompra(event) {
    const item = event.target

    if (item.classList[0] === 'trash-btn') {
      $('#modal-eliminar-compra').addClass('active')
      overlay.classList.add('active')

      $('#eliminar-compra-btn-ok').click(function () {

        const compra = item.parentElement
        // console.log(item.parentElement)
        /* ADD ANIMATION */
        compra.classList.add('fall')
        removeCompraLocal(compra)
        /* REMOVE ITEM */
        compra.addEventListener('transitionend', function () {
          compra.remove()
        })
      })
    }
  }
  /* ////////////////////////////////////////////////////////////////// */
  /* BORRAR COSAS DE LA MEMORIA LOCAL */
  function removeCompraLocal(compra) {

    let resto_actualizado
    let monto_actualizado = 0

    switch (true) {

      case $('#btn-screen-1').hasClass('screen-active'):

        let compras

        if (localStorage.getItem('compras') === null) {
          compras = []
        } else {
          compras = JSON.parse(localStorage.getItem('compras'))
        }

        // console.log(compra.children[1].innerHTML)
        let monto_compra_borrar = compra.children[0].innerHTML
        let nombre_compra_borrar = compra.children[1].innerHTML
        console.log(compras)
        let i = 0

        for (let j = 0; j < compras.length; ++j) {
          // console.log('++++++++++++ ' + compras[j][0])
          // console.log('++++++++++++ ' + compras[j][1])

          if (compras[j][1] == monto_compra_borrar && compras[j][0] == nombre_compra_borrar) {
            break
          }
          i++
        }

        compras.splice(i, 1)
        localStorage.setItem('compras', JSON.stringify(compras))

        updateMonto()

        if (localStorage.getItem('compras') === null) {
          compras = []
        } else {
          compras = JSON.parse(localStorage.getItem('compras'))
        }
        compras.forEach(function (compra) {
          parseInt(compra[1])
          monto_actualizado += parseInt(compra[1])
        })
        $('#main-gastado')[0].innerText = monto_actualizado
        resto_actualizado = monto_base - monto_actualizado
        $('#main-presupuesto-resto')[0].innerText = resto_actualizado

        break

      case $('#btn-screen-2').hasClass('screen-active'):

        let compras2

        if (localStorage.getItem('compras2') === null) {
          compras2 = []
        } else {
          compras2 = JSON.parse(localStorage.getItem('compras2'))
        }

        // console.log(compra.children[1].innerHTML)
        let monto_compra_borrar2 = compra.children[0].innerHTML
        let nombre_compra_borrar2 = compra.children[1].innerHTML
        let i2 = 0

        for (let j = 0; j < compras2.length; ++j) {
          // console.log('++++++++++++ ' + compras[j][0])
          // console.log('++++++++++++ ' + compras[j][1])

          if (compras2[j][1] == monto_compra_borrar2 && compras2[j][0] == nombre_compra_borrar2) {
            break
          }
          i2++
        }

        compras2.splice(i2, 1)
        localStorage.setItem('compras2', JSON.stringify(compras2))

        updateMonto()

        if (localStorage.getItem('compras2') === null) {
          compras2 = []
        } else {
          compras2 = JSON.parse(localStorage.getItem('compras2'))
        }
        compras2.forEach(function (compra) {
          parseInt(compra[1])
          monto_actualizado += parseInt(compra[1])
        })
        $('#main-gastado')[0].innerText = monto_actualizado
        resto_actualizado = monto_base - monto_actualizado
        $('#main-presupuesto-resto')[0].innerText = resto_actualizado

        break

      case $('#btn-screen-3').hasClass('screen-active'):

        let compras3

        if (localStorage.getItem('compras3') === null) {
          compras3 = []
        } else {
          compras3 = JSON.parse(localStorage.getItem('compras3'))
        }

        // console.log(compra.children[1].innerHTML)
        let monto_compra_borrar3 = compra.children[0].innerHTML
        let nombre_compra_borrar3 = compra.children[1].innerHTML
        let i3 = 0

        for (let j = 0; j < compras3.length; ++j) {
          // console.log('++++++++++++ ' + compras[j][0])
          // console.log('++++++++++++ ' + compras[j][1])

          if (compras3[j][1] == monto_compra_borrar3 && compras3[j][0] == nombre_compra_borrar3) {
            break
          }
          i3++
        }

        compras3.splice(i3, 1)
        localStorage.setItem('compras3', JSON.stringify(compras3))

        updateMonto()

        if (localStorage.getItem('compras3') === null) {
          compras3 = []
        } else {
          compras3 = JSON.parse(localStorage.getItem('compras3'))
        }
        compras3.forEach(function (compra) {
          parseInt(compra[1])
          monto_actualizado += parseInt(compra[1])
        })
        $('#main-gastado')[0].innerText = monto_actualizado
        resto_actualizado = monto_base - monto_actualizado
        $('#main-presupuesto-resto')[0].innerText = resto_actualizado

        break

      case $('#btn-screen-4').hasClass('screen-active'):

        let compras4

        if (localStorage.getItem('compras4') === null) {
          compras4 = []
        } else {
          compras4 = JSON.parse(localStorage.getItem('compras4'))
        }

        // console.log(compra.children[1].innerHTML)
        let monto_compra_borrar4 = compra.children[0].innerHTML
        let nombre_compra_borrar4 = compra.children[1].innerHTML
        let i4 = 0

        for (let j = 0; j < compras4.length; ++j) {
          // console.log('++++++++++++ ' + compras[j][0])
          // console.log('++++++++++++ ' + compras[j][1])

          if (compras4[j][1] == monto_compra_borrar4 && compras4[j][0] == nombre_compra_borrar4) {
            break
          }
          i4++
        }

        compras4.splice(i4, 1)
        localStorage.setItem('compras4', JSON.stringify(compras4))

        updateMonto()

        if (localStorage.getItem('compras4') === null) {
          compras4 = []
        } else {
          compras4 = JSON.parse(localStorage.getItem('compras4'))
        }
        compras4.forEach(function (compra) {
          parseInt(compra[1])
          monto_actualizado += parseInt(compra[1])
        })
        $('#main-gastado')[0].innerText = monto_actualizado
        resto_actualizado = monto_base - monto_actualizado
        $('#main-presupuesto-resto')[0].innerText = resto_actualizado

        break

      case $('#btn-screen-5').hasClass('screen-active'):

        let compras5

        if (localStorage.getItem('compras5') === null) {
          compras5 = []
        } else {
          compras5 = JSON.parse(localStorage.getItem('compras5'))
        }

        // console.log(compra.children[1].innerHTML)
        let monto_compra_borrar5 = compra.children[0].innerHTML
        let nombre_compra_borrar5 = compra.children[1].innerHTML
        let i5 = 0

        for (let j = 0; j < compras5.length; ++j) {
          // console.log('++++++++++++ ' + compras[j][0])
          // console.log('++++++++++++ ' + compras[j][1])

          if (compras5[j][1] == monto_compra_borrar5 && compras5[j][0] == nombre_compra_borrar5) {
            break
          }
          i5++
        }

        compras5.splice(i5, 1)
        localStorage.setItem('compras5', JSON.stringify(compras5))

        updateMonto()

        if (localStorage.getItem('compras5') === null) {
          compras5 = []
        } else {
          compras5 = JSON.parse(localStorage.getItem('compras5'))
        }
        compras5.forEach(function (compra) {
          parseInt(compra[1])
          monto_actualizado += parseInt(compra[1])
        })
        $('#main-gastado')[0].innerText = monto_actualizado
        resto_actualizado = monto_base - monto_actualizado
        $('#main-presupuesto-resto')[0].innerText = resto_actualizado

        break

      case $('#btn-screen-6').hasClass('screen-active'):

        let compras6

        if (localStorage.getItem('compras6') === null) {
          compras6 = []
        } else {
          compras6 = JSON.parse(localStorage.getItem('compras6'))
        }

        // console.log(compra.children[1].innerHTML)
        let monto_compra_borrar6 = compra.children[0].innerHTML
        let nombre_compra_borrar6 = compra.children[1].innerHTML
        let i6 = 0

        for (let j = 0; j < compras6.length; ++j) {
          // console.log('++++++++++++ ' + compras[j][0])
          // console.log('++++++++++++ ' + compras[j][1])

          if (compras6[j][1] == monto_compra_borrar6 && compras6[j][0] == nombre_compra_borrar6) {
            break
          }
          i6++
        }

        compras6.splice(i6, 1)
        localStorage.setItem('compras6', JSON.stringify(compras6))

        updateMonto()

        if (localStorage.getItem('compras6') === null) {
          compras6 = []
        } else {
          compras6 = JSON.parse(localStorage.getItem('compras6'))
        }
        compras6.forEach(function (compra) {
          parseInt(compra[1])
          monto_actualizado += parseInt(compra[1])
        })
        $('#main-gastado')[0].innerText = monto_actualizado
        resto_actualizado = monto_base - monto_actualizado
        $('#main-presupuesto-resto')[0].innerText = resto_actualizado

        break

      case $('#btn-screen-7').hasClass('screen-active'):

        let compras7

        if (localStorage.getItem('compras7') === null) {
          compras7 = []
        } else {
          compras7 = JSON.parse(localStorage.getItem('compras7'))
        }

        // console.log(compra.children[1].innerHTML)
        let monto_compra_borrar7 = compra.children[0].innerHTML
        let nombre_compra_borrar7 = compra.children[1].innerHTML
        let i7 = 0

        for (let j = 0; j < compras7.length; ++j) {
          // console.log('++++++++++++ ' + compras[j][0])
          // console.log('++++++++++++ ' + compras[j][1])

          if (compras7[j][1] == monto_compra_borrar7 && compras7[j][0] == nombre_compra_borrar7) {
            break
          }
          i7++
        }

        compras7.splice(i7, 1)
        localStorage.setItem('compras7', JSON.stringify(compras7))

        updateMonto()

        if (localStorage.getItem('compras7') === null) {
          compras7 = []
        } else {
          compras7 = JSON.parse(localStorage.getItem('compras7'))
        }
        compras7.forEach(function (compra) {
          parseInt(compra[1])
          monto_actualizado += parseInt(compra[1])
        })
        $('#main-gastado')[0].innerText = monto_actualizado
        resto_actualizado = monto_base - monto_actualizado
        $('#main-presupuesto-resto')[0].innerText = resto_actualizado

        break

      case $('#btn-screen-8').hasClass('screen-active'):

        let compras8

        if (localStorage.getItem('compras8') === null) {
          compras8 = []
        } else {
          compras8 = JSON.parse(localStorage.getItem('compras8'))
        }

        // console.log(compra.children[1].innerHTML)
        let monto_compra_borrar8 = compra.children[0].innerHTML
        let nombre_compra_borrar8 = compra.children[1].innerHTML
        let i8 = 0

        for (let j = 0; j < compras8.length; ++j) {
          // console.log('++++++++++++ ' + compras[j][0])
          // console.log('++++++++++++ ' + compras[j][1])

          if (compras8[j][1] == monto_compra_borrar8 && compras8[j][0] == nombre_compra_borrar8) {
            break
          }
          i8++
        }

        compras8.splice(i8, 1)
        localStorage.setItem('compras8', JSON.stringify(compras8))

        updateMonto()

        if (localStorage.getItem('compras8') === null) {
          compras8 = []
        } else {
          compras8 = JSON.parse(localStorage.getItem('compras8'))
        }
        compras8.forEach(function (compra) {
          parseInt(compra[1])
          monto_actualizado += parseInt(compra[1])
        })
        $('#main-gastado')[0].innerText = monto_actualizado
        resto_actualizado = monto_base - monto_actualizado
        $('#main-presupuesto-resto')[0].innerText = resto_actualizado

        break

      case $('#btn-screen-9').hasClass('screen-active'):

        let compras9

        if (localStorage.getItem('compras9') === null) {
          compras9 = []
        } else {
          compras9 = JSON.parse(localStorage.getItem('compras9'))
        }

        // console.log(compra.children[1].innerHTML)
        let monto_compra_borrar9 = compra.children[0].innerHTML
        let nombre_compra_borrar9 = compra.children[1].innerHTML
        let i9 = 0

        for (let j = 0; j < compras9.length; ++j) {
          // console.log('++++++++++++ ' + compras[j][0])
          // console.log('++++++++++++ ' + compras[j][1])

          if (compras9[j][1] == monto_compra_borrar9 && compras9[j][0] == nombre_compra_borrar9) {
            break
          }
          i9++
        }

        compras9.splice(i9, 1)
        localStorage.setItem('compras9', JSON.stringify(compras9))

        updateMonto()

        if (localStorage.getItem('compras9') === null) {
          compras9 = []
        } else {
          compras9 = JSON.parse(localStorage.getItem('compras9'))
        }
        compras9.forEach(function (compra) {
          parseInt(compra[1])
          monto_actualizado += parseInt(compra[1])
        })
        $('#main-gastado')[0].innerText = monto_actualizado
        resto_actualizado = monto_base - monto_actualizado
        $('#main-presupuesto-resto')[0].innerText = resto_actualizado

        break

      case $('#btn-screen-10').hasClass('screen-active'):

        let compras10

        if (localStorage.getItem('compras10') === null) {
          compras10 = []
        } else {
          compras10 = JSON.parse(localStorage.getItem('compras10'))
        }

        // console.log(compra.children[1].innerHTML)
        let monto_compra_borrar10 = compra.children[0].innerHTML
        let nombre_compra_borrar10 = compra.children[1].innerHTML
        let i10 = 0

        for (let j = 0; j < compras10.length; ++j) {
          // console.log('++++++++++++ ' + compras[j][0])
          // console.log('++++++++++++ ' + compras[j][1])

          if (compras10[j][1] == monto_compra_borrar10 && compras10[j][0] == nombre_compra_borrar10) {
            break
          }
          i10++
        }

        compras10.splice(i10, 1)
        localStorage.setItem('compras10', JSON.stringify(compras10))

        updateMonto()

        if (localStorage.getItem('compras10') === null) {
          compras10 = []
        } else {
          compras10 = JSON.parse(localStorage.getItem('compras10'))
        }
        compras10.forEach(function (compra) {
          parseInt(compra[1])
          monto_actualizado += parseInt(compra[1])
        })
        $('#main-gastado')[0].innerText = monto_actualizado
        resto_actualizado = monto_base - monto_actualizado
        $('#main-presupuesto-resto')[0].innerText = resto_actualizado

        break

      case $('#btn-screen-11').hasClass('screen-active'):

        let compras11

        if (localStorage.getItem('compras11') === null) {
          compras11 = []
        } else {
          compras11 = JSON.parse(localStorage.getItem('compras11'))
        }

        // console.log(compra.children[1].innerHTML)
        let monto_compra_borrar11 = compra.children[0].innerHTML
        let nombre_compra_borrar11 = compra.children[1].innerHTML
        let i11 = 0

        for (let j = 0; j < compras11.length; ++j) {
          // console.log('++++++++++++ ' + compras[j][0])
          // console.log('++++++++++++ ' + compras[j][1])

          if (compras11[j][1] == monto_compra_borrar11 && compras11[j][0] == nombre_compra_borrar11) {
            break
          }
          i11++
        }

        compras9.splice(i11, 1)
        localStorage.setItem('compras11', JSON.stringify(compras11))

        updateMonto()

        if (localStorage.getItem('compras11') === null) {
          compras11 = []
        } else {
          compras11 = JSON.parse(localStorage.getItem('compras11'))
        }
        compras11.forEach(function (compra) {
          parseInt(compra[1])
          monto_actualizado += parseInt(compra[1])
        })
        $('#main-gastado')[0].innerText = monto_actualizado
        resto_actualizado = monto_base - monto_actualizado
        $('#main-presupuesto-resto')[0].innerText = resto_actualizado

        break

      case $('#btn-screen-12').hasClass('screen-active'):

        let compras12

        if (localStorage.getItem('compras12') === null) {
          compras12 = []
        } else {
          compras12 = JSON.parse(localStorage.getItem('compras12'))
        }

        // console.log(compra.children[1].innerHTML)
        let monto_compra_borrar12 = compra.children[0].innerHTML
        let nombre_compra_borrar12 = compra.children[1].innerHTML
        let i12 = 0

        for (let j = 0; j < compras12.length; ++j) {
          // console.log('++++++++++++ ' + compras[j][0])
          // console.log('++++++++++++ ' + compras[j][1])

          if (compras12[j][1] == monto_compra_borrar12 && compras12[j][0] == nombre_compra_borrar12) {
            break
          }
          i12++
        }

        compras12.splice(i12, 1)
        localStorage.setItem('compras12', JSON.stringify(compras12))

        updateMonto()

        if (localStorage.getItem('compras12') === null) {
          compras12 = []
        } else {
          compras12 = JSON.parse(localStorage.getItem('compras12'))
        }
        compras12.forEach(function (compra) {
          parseInt(compra[1])
          monto_actualizado += parseInt(compra[1])
        })
        $('#main-gastado')[0].innerText = monto_actualizado
        resto_actualizado = monto_base - monto_actualizado
        $('#main-presupuesto-resto')[0].innerText = resto_actualizado

        break

      case $('#btn-screen-13').hasClass('screen-active'):

        let compras13

        if (localStorage.getItem('compras13') === null) {
          compras13 = []
        } else {
          compras13 = JSON.parse(localStorage.getItem('compras13'))
        }

        // console.log(compra.children[1].innerHTML)
        let monto_compra_borrar13 = compra.children[0].innerHTML
        let nombre_compra_borrar13 = compra.children[1].innerHTML
        let i13 = 0

        for (let j = 0; j < compras13.length; ++j) {
          // console.log('++++++++++++ ' + compras[j][0])
          // console.log('++++++++++++ ' + compras[j][1])

          if (compras13[j][1] == monto_compra_borrar13 && compras13[j][0] == nombre_compra_borrar13) {
            break
          }
          i13++
        }

        compras13.splice(i13, 1)
        localStorage.setItem('compras13', JSON.stringify(compras13))

        updateMonto()

        if (localStorage.getItem('compras13') === null) {
          compras13 = []
        } else {
          compras13 = JSON.parse(localStorage.getItem('compras13'))
        }
        compras13.forEach(function (compra) {
          parseInt(compra[1])
          monto_actualizado += parseInt(compra[1])
        })
        $('#main-gastado')[0].innerText = monto_actualizado
        resto_actualizado = monto_base - monto_actualizado
        $('#main-presupuesto-resto')[0].innerText = resto_actualizado

        break


    }

    updateMonto()

    if (parseInt(resto) < 0) {
      $('#main-presupuesto-resto').addClass('numero-negativo')
      $('#main-presupuesto-resto').removeClass('numero-positivo')
    } else {
      $('#main-presupuesto-resto').addClass('numero-positivo')
      $('#main-presupuesto-resto').removeClass('numero-negativo')
    }
    if (parseInt($('#main-gastado')[0].innerText) > 0) {
      $('#main-gastado').addClass('numero-negativo')
      $('#main-gastado').removeClass('numero-positivo')
    } else {
      $('#main-gastado').addClass('numero-positivo')
      $('#main-gastado').removeClass('numero-negativo')
    }

  }

  /* ////////////////////////////////////////////////////////////////// */
  /* BORRAR LISTADO DE COMPRAS */
  /* ////////////////////////////////////////////////////////////////// */
  $('#eliminar-listado-compra-btn-ok-confirm').on('click', () => {

    switch (true) {

      case $('#btn-screen-1').hasClass('screen-active'):
        let compras
        $('.compras-list').empty()

        if (localStorage.getItem('compras') === null) {
          compras = []
        } else {
          compras = JSON.parse(localStorage.getItem('compras'))
        }
        compras = []
        localStorage.setItem('compras', JSON.stringify(compras))

        break

      case $('#btn-screen-2').hasClass('screen-active'):
        let compras2
        $('.compras-list').empty()

        if (localStorage.getItem('compras2') === null) {
          compras2 = []
        } else {
          compras2 = JSON.parse(localStorage.getItem('compras2'))
        }
        compras2 = []
        localStorage.setItem('compras2', JSON.stringify(compras2))

        break

      case $('#btn-screen-3').hasClass('screen-active'):
        let compras3
        $('.compras-list').empty()

        if (localStorage.getItem('compras3') === null) {
          compras3 = []
        } else {
          compras3 = JSON.parse(localStorage.getItem('compras3'))
        }
        compras3 = []
        localStorage.setItem('compras3', JSON.stringify(compras3))

        break

      case $('#btn-screen-4').hasClass('screen-active'):
        let compras4
        $('.compras-list').empty()

        if (localStorage.getItem('compras4') === null) {
          compras4 = []
        } else {
          compras4 = JSON.parse(localStorage.getItem('compras4'))
        }
        compras4 = []
        localStorage.setItem('compras4', JSON.stringify(compras4))

        break

      case $('#btn-screen-5').hasClass('screen-active'):
        let compras5
        $('.compras-list').empty()

        if (localStorage.getItem('compras5') === null) {
          compras5 = []
        } else {
          compras5 = JSON.parse(localStorage.getItem('compras5'))
        }
        compras5 = []
        localStorage.setItem('compras5', JSON.stringify(compras5))

        break

      case $('#btn-screen-6').hasClass('screen-active'):
        let compras6
        $('.compras-list').empty()

        if (localStorage.getItem('compras6') === null) {
          compras6 = []
        } else {
          compras6 = JSON.parse(localStorage.getItem('compras6'))
        }
        compras6 = []
        localStorage.setItem('compras6', JSON.stringify(compras6))

        break

      case $('#btn-screen-7').hasClass('screen-active'):
        let compras7
        $('.compras-list').empty()

        if (localStorage.getItem('compras7') === null) {
          compras7 = []
        } else {
          compras7 = JSON.parse(localStorage.getItem('compras7'))
        }
        compras7 = []
        localStorage.setItem('compras7', JSON.stringify(compras7))

        break

      case $('#btn-screen-8').hasClass('screen-active'):
        let compras8
        $('.compras-list').empty()

        if (localStorage.getItem('compras8') === null) {
          compras8 = []
        } else {
          compras8 = JSON.parse(localStorage.getItem('compras8'))
        }
        compras8 = []
        localStorage.setItem('compras8', JSON.stringify(compras8))

        break

      case $('#btn-screen-9').hasClass('screen-active'):
        let compras9
        $('.compras-list').empty()

        if (localStorage.getItem('compras9') === null) {
          compras9 = []
        } else {
          compras9 = JSON.parse(localStorage.getItem('compras9'))
        }
        compras9 = []
        localStorage.setItem('compras9', JSON.stringify(compras9))

        break

      case $('#btn-screen-10').hasClass('screen-active'):
        let compras10
        $('.compras-list').empty()

        if (localStorage.getItem('compras10') === null) {
          compras10 = []
        } else {
          compras10 = JSON.parse(localStorage.getItem('compras10'))
        }
        compras10 = []
        localStorage.setItem('compras10', JSON.stringify(compras10))

        break

      case $('#btn-screen-11').hasClass('screen-active'):
        let compras11
        $('.compras-list').empty()

        if (localStorage.getItem('compras11') === null) {
          compras11 = []
        } else {
          compras11 = JSON.parse(localStorage.getItem('compras11'))
        }
        compras11 = []
        localStorage.setItem('compras11', JSON.stringify(compras11))

        break

      case $('#btn-screen-12').hasClass('screen-active'):
        let compras12
        $('.compras-list').empty()

        if (localStorage.getItem('compras12') === null) {
          compras12 = []
        } else {
          compras12 = JSON.parse(localStorage.getItem('compras12'))
        }
        compras12 = []
        localStorage.setItem('compras12', JSON.stringify(compras12))

        break

      case $('#btn-screen-13').hasClass('screen-active'):
        let compras13
        $('.compras-list').empty()

        if (localStorage.getItem('compras13') === null) {
          compras13 = []
        } else {
          compras13 = JSON.parse(localStorage.getItem('compras13'))
        }
        compras13 = []
        localStorage.setItem('compras13', JSON.stringify(compras13))

        break
    }
    getCompras()
  })

  /* ////////////////////////////////////////////////////////////////// */
  /* LOCAL STORAGE SAVE COMPRAS*/
  function saveCompraLocal(compra, monto) {

    switch (true) {

      case $('#btn-screen-1').hasClass('screen-active'):

        let compras

        if (localStorage.getItem('compras') === null) {
          compras = []
        } else {
          compras = JSON.parse(localStorage.getItem('compras'))
        }
        compras.push([compra, monto])
        localStorage.setItem('compras', JSON.stringify(compras))

        break

      case $('#btn-screen-2').hasClass('screen-active'):

        let compras2

        if (localStorage.getItem('compras2') === null) {
          compras2 = []
        } else {
          compras2 = JSON.parse(localStorage.getItem('compras2'))
        }
        compras2.push([compra, monto])
        localStorage.setItem('compras2', JSON.stringify(compras2))

        break

      case $('#btn-screen-3').hasClass('screen-active'):

        let compras3

        if (localStorage.getItem('compras3') === null) {
          compras3 = []
        } else {
          compras3 = JSON.parse(localStorage.getItem('compras3'))
        }
        compras3.push([compra, monto])
        localStorage.setItem('compras3', JSON.stringify(compras3))

        break

      case $('#btn-screen-4').hasClass('screen-active'):

        let compras4

        if (localStorage.getItem('compras4') === null) {
          compras4 = []
        } else {
          compras4 = JSON.parse(localStorage.getItem('compras4'))
        }
        compras4.push([compra, monto])
        localStorage.setItem('compras4', JSON.stringify(compras4))

        break

      case $('#btn-screen-5').hasClass('screen-active'):

        let compras5

        if (localStorage.getItem('compras5') === null) {
          compras5 = []
        } else {
          compras5 = JSON.parse(localStorage.getItem('compras5'))
        }
        compras5.push([compra, monto])
        localStorage.setItem('compras5', JSON.stringify(compras5))

        break

      case $('#btn-screen-6').hasClass('screen-active'):

        let compras6

        if (localStorage.getItem('compras6') === null) {
          compras6 = []
        } else {
          compras6 = JSON.parse(localStorage.getItem('compras6'))
        }
        compras6.push([compra, monto])
        localStorage.setItem('compras6', JSON.stringify(compras6))

        break

      case $('#btn-screen-7').hasClass('screen-active'):

        let compras7

        if (localStorage.getItem('compras7') === null) {
          compras7 = []
        } else {
          compras7 = JSON.parse(localStorage.getItem('compras7'))
        }
        compras7.push([compra, monto])
        localStorage.setItem('compras7', JSON.stringify(compras7))

        break

      case $('#btn-screen-8').hasClass('screen-active'):

        let compras8

        if (localStorage.getItem('compras8') === null) {
          compras8 = []
        } else {
          compras8 = JSON.parse(localStorage.getItem('compras8'))
        }
        compras8.push([compra, monto])
        localStorage.setItem('compras8', JSON.stringify(compras8))

        break

      case $('#btn-screen-9').hasClass('screen-active'):

        let compras9

        if (localStorage.getItem('compras9') === null) {
          compras9 = []
        } else {
          compras9 = JSON.parse(localStorage.getItem('compras9'))
        }
        compras9.push([compra, monto])
        localStorage.setItem('compras9', JSON.stringify(compras9))

        break

      case $('#btn-screen-10').hasClass('screen-active'):

        let compras10

        if (localStorage.getItem('compras10') === null) {
          compras10 = []
        } else {
          compras10 = JSON.parse(localStorage.getItem('compras10'))
        }
        compras10.push([compra, monto])
        localStorage.setItem('compras10', JSON.stringify(compras10))

        break

      case $('#btn-screen-11').hasClass('screen-active'):

        let compras11

        if (localStorage.getItem('compras11') === null) {
          compras11 = []
        } else {
          compras11 = JSON.parse(localStorage.getItem('compras11'))
        }
        compras11.push([compra, monto])
        localStorage.setItem('compras11', JSON.stringify(compras11))

        break

      case $('#btn-screen-12').hasClass('screen-active'):

        let compras12

        if (localStorage.getItem('compras12') === null) {
          compras12 = []
        } else {
          compras12 = JSON.parse(localStorage.getItem('compras12'))
        }
        compras12.push([compra, monto])
        localStorage.setItem('compras12', JSON.stringify(compras12))

        break

      case $('#btn-screen-13').hasClass('screen-active'):

        let compras13

        if (localStorage.getItem('compras13') === null) {
          compras13 = []
        } else {
          compras13 = JSON.parse(localStorage.getItem('compras13'))
        }
        compras13.push([compra, monto])
        localStorage.setItem('compras13', JSON.stringify(compras13))

        break

    }

  }

  /* ////////////////////////////////////////////////////////////////// */
  /* LOCAL STORAGE GET COMPRAS */
  function getCompras() {

    let montoTotal = 0
    switch (true) {

      /* ////////////////////////////////////////////////////////////////// */
      /* CASE BOTON 1 */
      /* ////////////////////////////////////////////////////////////////// */
      case $('#btn-screen-1').hasClass('screen-active'):

        let compras
        if (localStorage.getItem('compras') === null) {
          compras = []
        } else {
          compras = JSON.parse(localStorage.getItem('compras'))
        }
        compras.reverse()
        compras.forEach(function (compra, monto) {
          // CREAR NUEVA COMPRA
          const compraNueva = document.createElement('div')
          compraNueva.classList.add('compra-nueva')
          // CREAR NUEVO LI MONTO
          const compraMonto = document.createElement('li')
          compraMonto.innerText = compra[1]
          if (compraMonto.innerText < 0) {
            compraMonto.classList.add('numero-positivo')
          } else {
            compraMonto.classList.add('numero-negativo')
          }
          compraMonto.classList.add('compra-monto')
          compraNueva.appendChild(compraMonto)
          // CREAR NUEVO LI ITEM
          const compraItem = document.createElement('li')
          compraItem.innerText = compra[0]
          compraItem.classList.add('compra-item')
          compraNueva.appendChild(compraItem)
          // CREAR NUEVO TRASH BUTTON
          const trashButton = document.createElement('button')
          trashButton.innerHTML = '<i class="fas fa-trash"></i>'
          trashButton.classList.add('trash-btn')
          compraNueva.appendChild(trashButton)
          // COMPRA NUEVA COMO NUEVO ITEM EN LA LISTA
          compras_list.appendChild(compraNueva)

          updateMonto()

          if (parseInt(resto) < 0) {
            $('#main-presupuesto-resto').addClass('numero-negativo')
            $('#main-presupuesto-resto').removeClass('numero-positivo')
          } else {
            $('#main-presupuesto-resto').addClass('numero-positivo')
            $('#main-presupuesto-resto').removeClass('numero-negativo')
          }
          if (parseInt($('#main-gastado')[0].innerText) > 0) {
            $('#main-gastado').addClass('numero-negativo')
            $('#main-gastado').removeClass('numero-positivo')
          } else {
            $('#main-gastado').addClass('numero-positivo')
            $('#main-gastado').removeClass('numero-negativo')
          }

        })

        /* ////////////////////////////////////////////////////////////////// */
        /* LOCAL STORAGE REFRESH SUMA TOTAL Y RESTO  */
        compras.reverse()
        compras.forEach(function (compra) {
          montoTotal += parseInt(compra[1])
        })
        $('#main-gastado')[0].innerText = montoTotal
        let montoBase
        if (localStorage.getItem('montoBase') === null) {
          montoBase = []
        } else {
          montoBase = JSON.parse(localStorage.getItem('montoBase'))
        }
        $('#main-presupuesto-resto')[0].innerText = parseInt(montoBase - $('#main-gastado')[0].innerText)

        updateMonto()

        if (parseInt(resto) < 0) {
          $('#main-presupuesto-resto').addClass('numero-negativo')
          $('#main-presupuesto-resto').removeClass('numero-positivo')
        } else {
          $('#main-presupuesto-resto').addClass('numero-positivo')
          $('#main-presupuesto-resto').removeClass('numero-negativo')
        }
        if (parseInt($('#main-gastado')[0].innerText) > 0) {
          $('#main-gastado').addClass('numero-negativo')
          $('#main-gastado').removeClass('numero-positivo')
        } else {
          $('#main-gastado').addClass('numero-positivo')
          $('#main-gastado').removeClass('numero-negativo')
        }

        break

      /* ////////////////////////////////////////////////////////////////// */
      /* CASE BOTON 2 */
      /* ////////////////////////////////////////////////////////////////// */
      case $('#btn-screen-2').hasClass('screen-active'):
        let compras2
        if (localStorage.getItem('compras2') === null) {
          compras2 = []
        } else {
          compras2 = JSON.parse(localStorage.getItem('compras2'))
        }
        compras2.reverse()
        compras2.forEach(function (compra, monto) {
          // CREAR NUEVA COMPRA
          const compraNueva = document.createElement('div')
          compraNueva.classList.add('compra-nueva')
          // CREAR NUEVO LI MONTO
          const compraMonto = document.createElement('li')
          compraMonto.innerText = compra[1]
          if (compraMonto.innerText < 0) {
            compraMonto.classList.add('numero-positivo')
          } else {
            compraMonto.classList.add('numero-negativo')
          }
          compraMonto.classList.add('compra-monto')
          compraNueva.appendChild(compraMonto)
          // CREAR NUEVO LI ITEM
          const compraItem = document.createElement('li')
          compraItem.innerText = compra[0]
          compraItem.classList.add('compra-item')
          compraNueva.appendChild(compraItem)
          // CREAR NUEVO TRASH BUTTON
          const trashButton = document.createElement('button')
          trashButton.innerHTML = '<i class="fas fa-trash"></i>'
          trashButton.classList.add('trash-btn')
          compraNueva.appendChild(trashButton)
          // COMPRA NUEVA COMO NUEVO ITEM EN LA LISTA
          compras_list.appendChild(compraNueva)

          updateMonto()

          if (parseInt(resto) < 0) {
            $('#main-presupuesto-resto').addClass('numero-negativo')
            $('#main-presupuesto-resto').removeClass('numero-positivo')
          } else {
            $('#main-presupuesto-resto').addClass('numero-positivo')
            $('#main-presupuesto-resto').removeClass('numero-negativo')
          }
          if (parseInt($('#main-gastado')[0].innerText) > 0) {
            $('#main-gastado').addClass('numero-negativo')
            $('#main-gastado').removeClass('numero-positivo')
          } else {
            $('#main-gastado').addClass('numero-positivo')
            $('#main-gastado').removeClass('numero-negativo')
          }

        })

        /* ////////////////////////////////////////////////////////////////// */
        /* LOCAL STORAGE REFRESH SUMA TOTAL Y RESTO  */
        compras2.forEach(function (compra) {
          montoTotal += parseInt(compra[1])
        })
        $('#main-gastado')[0].innerText = montoTotal
        let montoBase2
        if (localStorage.getItem('montoBase2') === null) {
          montoBase2 = []
        } else {
          montoBase2 = JSON.parse(localStorage.getItem('montoBase2'))
        }
        $('#main-presupuesto-resto')[0].innerText = parseInt(montoBase2 - $('#main-gastado')[0].innerText)

        updateMonto()

        if (parseInt(resto) < 0) {
          $('#main-presupuesto-resto').addClass('numero-negativo')
          $('#main-presupuesto-resto').removeClass('numero-positivo')
        } else {
          $('#main-presupuesto-resto').addClass('numero-positivo')
          $('#main-presupuesto-resto').removeClass('numero-negativo')
        }
        if (parseInt($('#main-gastado')[0].innerText) > 0) {
          $('#main-gastado').addClass('numero-negativo')
          $('#main-gastado').removeClass('numero-positivo')
        } else {
          $('#main-gastado').addClass('numero-positivo')
          $('#main-gastado').removeClass('numero-negativo')
        }

        break

      /* ////////////////////////////////////////////////////////////////// */
      /* CASE BOTON 3 */
      /* ////////////////////////////////////////////////////////////////// */
      case $('#btn-screen-3').hasClass('screen-active'):
        let compras3
        if (localStorage.getItem('compras3') === null) {
          compras3 = []
        } else {
          compras3 = JSON.parse(localStorage.getItem('compras3'))
        }
        compras3.reverse()
        compras3.forEach(function (compra, monto) {
          // CREAR NUEVA COMPRA
          const compraNueva = document.createElement('div')
          compraNueva.classList.add('compra-nueva')
          // CREAR NUEVO LI MONTO
          const compraMonto = document.createElement('li')
          compraMonto.innerText = compra[1]
          if (compraMonto.innerText < 0) {
            compraMonto.classList.add('numero-positivo')
          } else {
            compraMonto.classList.add('numero-negativo')
          }
          compraMonto.classList.add('compra-monto')
          compraNueva.appendChild(compraMonto)
          // CREAR NUEVO LI ITEM
          const compraItem = document.createElement('li')
          compraItem.innerText = compra[0]
          compraItem.classList.add('compra-item')
          compraNueva.appendChild(compraItem)
          // CREAR NUEVO TRASH BUTTON
          const trashButton = document.createElement('button')
          trashButton.innerHTML = '<i class="fas fa-trash"></i>'
          trashButton.classList.add('trash-btn')
          compraNueva.appendChild(trashButton)
          // COMPRA NUEVA COMO NUEVO ITEM EN LA LISTA
          compras_list.appendChild(compraNueva)

          updateMonto()

          if (parseInt(resto) < 0) {
            $('#main-presupuesto-resto').addClass('numero-negativo')
            $('#main-presupuesto-resto').removeClass('numero-positivo')
          } else {
            $('#main-presupuesto-resto').addClass('numero-positivo')
            $('#main-presupuesto-resto').removeClass('numero-negativo')
          }
          if (parseInt($('#main-gastado')[0].innerText) > 0) {
            $('#main-gastado').addClass('numero-negativo')
            $('#main-gastado').removeClass('numero-positivo')
          } else {
            $('#main-gastado').addClass('numero-positivo')
            $('#main-gastado').removeClass('numero-negativo')
          }

        })

        /* ////////////////////////////////////////////////////////////////// */
        /* LOCAL STORAGE REFRESH SUMA TOTAL Y RESTO  */
        compras3.forEach(function (compra) {
          montoTotal += parseInt(compra[1])
        })
        $('#main-gastado')[0].innerText = montoTotal
        let montoBase3
        if (localStorage.getItem('montoBase3') === null) {
          montoBase3 = []
        } else {
          montoBase3 = JSON.parse(localStorage.getItem('montoBase3'))
        }
        $('#main-presupuesto-resto')[0].innerText = parseInt(montoBase3 - $('#main-gastado')[0].innerText)

        updateMonto()

        if (parseInt(resto) < 0) {
          $('#main-presupuesto-resto').addClass('numero-negativo')
          $('#main-presupuesto-resto').removeClass('numero-positivo')
        } else {
          $('#main-presupuesto-resto').addClass('numero-positivo')
          $('#main-presupuesto-resto').removeClass('numero-negativo')
        }
        if (parseInt($('#main-gastado')[0].innerText) > 0) {
          $('#main-gastado').addClass('numero-negativo')
          $('#main-gastado').removeClass('numero-positivo')
        } else {
          $('#main-gastado').addClass('numero-positivo')
          $('#main-gastado').removeClass('numero-negativo')
        }

        break

      /* ////////////////////////////////////////////////////////////////// */
      /* CASE BOTON 4 */
      /* ////////////////////////////////////////////////////////////////// */
      case $('#btn-screen-4').hasClass('screen-active'):
        let compras4
        if (localStorage.getItem('compras4') === null) {
          compras4 = []
        } else {
          compras4 = JSON.parse(localStorage.getItem('compras4'))
        }
        compras4.reverse()
        compras4.forEach(function (compra, monto) {
          // CREAR NUEVA COMPRA
          const compraNueva = document.createElement('div')
          compraNueva.classList.add('compra-nueva')
          // CREAR NUEVO LI MONTO
          const compraMonto = document.createElement('li')
          compraMonto.innerText = compra[1]
          if (compraMonto.innerText < 0) {
            compraMonto.classList.add('numero-positivo')
          } else {
            compraMonto.classList.add('numero-negativo')
          }
          compraMonto.classList.add('compra-monto')
          compraNueva.appendChild(compraMonto)
          // CREAR NUEVO LI ITEM
          const compraItem = document.createElement('li')
          compraItem.innerText = compra[0]
          compraItem.classList.add('compra-item')
          compraNueva.appendChild(compraItem)
          // CREAR NUEVO TRASH BUTTON
          const trashButton = document.createElement('button')
          trashButton.innerHTML = '<i class="fas fa-trash"></i>'
          trashButton.classList.add('trash-btn')
          compraNueva.appendChild(trashButton)
          // COMPRA NUEVA COMO NUEVO ITEM EN LA LISTA
          compras_list.appendChild(compraNueva)

          updateMonto()

          if (parseInt(resto) < 0) {
            $('#main-presupuesto-resto').addClass('numero-negativo')
            $('#main-presupuesto-resto').removeClass('numero-positivo')
          } else {
            $('#main-presupuesto-resto').addClass('numero-positivo')
            $('#main-presupuesto-resto').removeClass('numero-negativo')
          }
          if (parseInt($('#main-gastado')[0].innerText) > 0) {
            $('#main-gastado').addClass('numero-negativo')
            $('#main-gastado').removeClass('numero-positivo')
          } else {
            $('#main-gastado').addClass('numero-positivo')
            $('#main-gastado').removeClass('numero-negativo')
          }

        })

        /* ////////////////////////////////////////////////////////////////// */
        /* LOCAL STORAGE REFRESH SUMA TOTAL Y RESTO  */
        compras4.forEach(function (compra) {
          montoTotal += parseInt(compra[1])
        })
        $('#main-gastado')[0].innerText = montoTotal
        let montoBase4
        if (localStorage.getItem('montoBase4') === null) {
          montoBase4 = []
        } else {
          montoBase4 = JSON.parse(localStorage.getItem('montoBase4'))
        }
        $('#main-presupuesto-resto')[0].innerText = parseInt(montoBase4 - $('#main-gastado')[0].innerText)

        updateMonto()

        if (parseInt(resto) < 0) {
          $('#main-presupuesto-resto').addClass('numero-negativo')
          $('#main-presupuesto-resto').removeClass('numero-positivo')
        } else {
          $('#main-presupuesto-resto').addClass('numero-positivo')
          $('#main-presupuesto-resto').removeClass('numero-negativo')
        }
        if (parseInt($('#main-gastado')[0].innerText) > 0) {
          $('#main-gastado').addClass('numero-negativo')
          $('#main-gastado').removeClass('numero-positivo')
        } else {
          $('#main-gastado').addClass('numero-positivo')
          $('#main-gastado').removeClass('numero-negativo')
        }

        break

      /* ////////////////////////////////////////////////////////////////// */
      /* CASE BOTON 5 */
      /* ////////////////////////////////////////////////////////////////// */
      case $('#btn-screen-5').hasClass('screen-active'):
        let compras5
        if (localStorage.getItem('compras5') === null) {
          compras5 = []
        } else {
          compras5 = JSON.parse(localStorage.getItem('compras5'))
        }
        compras5.reverse()
        compras5.forEach(function (compra, monto) {
          // CREAR NUEVA COMPRA
          const compraNueva = document.createElement('div')
          compraNueva.classList.add('compra-nueva')
          // CREAR NUEVO LI MONTO
          const compraMonto = document.createElement('li')
          compraMonto.innerText = compra[1]
          if (compraMonto.innerText < 0) {
            compraMonto.classList.add('numero-positivo')
          } else {
            compraMonto.classList.add('numero-negativo')
          }
          compraMonto.classList.add('compra-monto')
          compraNueva.appendChild(compraMonto)
          // CREAR NUEVO LI ITEM
          const compraItem = document.createElement('li')
          compraItem.innerText = compra[0]
          compraItem.classList.add('compra-item')
          compraNueva.appendChild(compraItem)
          // CREAR NUEVO TRASH BUTTON
          const trashButton = document.createElement('button')
          trashButton.innerHTML = '<i class="fas fa-trash"></i>'
          trashButton.classList.add('trash-btn')
          compraNueva.appendChild(trashButton)
          // COMPRA NUEVA COMO NUEVO ITEM EN LA LISTA
          compras_list.appendChild(compraNueva)

          updateMonto()

          if (parseInt(resto) < 0) {
            $('#main-presupuesto-resto').addClass('numero-negativo')
            $('#main-presupuesto-resto').removeClass('numero-positivo')
          } else {
            $('#main-presupuesto-resto').addClass('numero-positivo')
            $('#main-presupuesto-resto').removeClass('numero-negativo')
          }
          if (parseInt($('#main-gastado')[0].innerText) > 0) {
            $('#main-gastado').addClass('numero-negativo')
            $('#main-gastado').removeClass('numero-positivo')
          } else {
            $('#main-gastado').addClass('numero-positivo')
            $('#main-gastado').removeClass('numero-negativo')
          }

        })

        /* ////////////////////////////////////////////////////////////////// */
        /* LOCAL STORAGE REFRESH SUMA TOTAL Y RESTO  */
        compras5.forEach(function (compra) {
          montoTotal += parseInt(compra[1])
        })
        $('#main-gastado')[0].innerText = montoTotal
        let montoBase5
        if (localStorage.getItem('montoBase5') === null) {
          montoBase5 = []
        } else {
          montoBase5 = JSON.parse(localStorage.getItem('montoBase5'))
        }
        $('#main-presupuesto-resto')[0].innerText = parseInt(montoBase5 - $('#main-gastado')[0].innerText)

        updateMonto()

        if (parseInt(resto) < 0) {
          $('#main-presupuesto-resto').addClass('numero-negativo')
          $('#main-presupuesto-resto').removeClass('numero-positivo')
        } else {
          $('#main-presupuesto-resto').addClass('numero-positivo')
          $('#main-presupuesto-resto').removeClass('numero-negativo')
        }
        if (parseInt($('#main-gastado')[0].innerText) > 0) {
          $('#main-gastado').addClass('numero-negativo')
          $('#main-gastado').removeClass('numero-positivo')
        } else {
          $('#main-gastado').addClass('numero-positivo')
          $('#main-gastado').removeClass('numero-negativo')
        }

        break

      /* ////////////////////////////////////////////////////////////////// */
      /* CASE BOTON 6 */
      /* ////////////////////////////////////////////////////////////////// */
      case $('#btn-screen-6').hasClass('screen-active'):
        let compras6
        if (localStorage.getItem('compras6') === null) {
          compras6 = []
        } else {
          compras6 = JSON.parse(localStorage.getItem('compras6'))
        }
        compras6.reverse()
        compras6.forEach(function (compra, monto) {
          // CREAR NUEVA COMPRA
          const compraNueva = document.createElement('div')
          compraNueva.classList.add('compra-nueva')
          // CREAR NUEVO LI MONTO
          const compraMonto = document.createElement('li')
          compraMonto.innerText = compra[1]
          if (compraMonto.innerText < 0) {
            compraMonto.classList.add('numero-positivo')
          } else {
            compraMonto.classList.add('numero-negativo')
          }
          compraMonto.classList.add('compra-monto')
          compraNueva.appendChild(compraMonto)
          // CREAR NUEVO LI ITEM
          const compraItem = document.createElement('li')
          compraItem.innerText = compra[0]
          compraItem.classList.add('compra-item')
          compraNueva.appendChild(compraItem)
          // CREAR NUEVO TRASH BUTTON
          const trashButton = document.createElement('button')
          trashButton.innerHTML = '<i class="fas fa-trash"></i>'
          trashButton.classList.add('trash-btn')
          compraNueva.appendChild(trashButton)
          // COMPRA NUEVA COMO NUEVO ITEM EN LA LISTA
          compras_list.appendChild(compraNueva)

          updateMonto()

          if (parseInt(resto) < 0) {
            $('#main-presupuesto-resto').addClass('numero-negativo')
            $('#main-presupuesto-resto').removeClass('numero-positivo')
          } else {
            $('#main-presupuesto-resto').addClass('numero-positivo')
            $('#main-presupuesto-resto').removeClass('numero-negativo')
          }
          if (parseInt($('#main-gastado')[0].innerText) > 0) {
            $('#main-gastado').addClass('numero-negativo')
            $('#main-gastado').removeClass('numero-positivo')
          } else {
            $('#main-gastado').addClass('numero-positivo')
            $('#main-gastado').removeClass('numero-negativo')
          }

        })

        /* ////////////////////////////////////////////////////////////////// */
        /* LOCAL STORAGE REFRESH SUMA TOTAL Y RESTO  */
        compras6.forEach(function (compra) {
          montoTotal += parseInt(compra[1])
        })
        $('#main-gastado')[0].innerText = montoTotal
        let montoBase6
        if (localStorage.getItem('montoBase6') === null) {
          montoBase6 = []
        } else {
          montoBase6 = JSON.parse(localStorage.getItem('montoBase6'))
        }
        $('#main-presupuesto-resto')[0].innerText = parseInt(montoBase6 - $('#main-gastado')[0].innerText)

        updateMonto()

        if (parseInt(resto) < 0) {
          $('#main-presupuesto-resto').addClass('numero-negativo')
          $('#main-presupuesto-resto').removeClass('numero-positivo')
        } else {
          $('#main-presupuesto-resto').addClass('numero-positivo')
          $('#main-presupuesto-resto').removeClass('numero-negativo')
        }
        if (parseInt($('#main-gastado')[0].innerText) > 0) {
          $('#main-gastado').addClass('numero-negativo')
          $('#main-gastado').removeClass('numero-positivo')
        } else {
          $('#main-gastado').addClass('numero-positivo')
          $('#main-gastado').removeClass('numero-negativo')
        }

        break

      /* ////////////////////////////////////////////////////////////////// */
      /* CASE BOTON 7 */
      /* ////////////////////////////////////////////////////////////////// */
      case $('#btn-screen-7').hasClass('screen-active'):
        let compras7
        if (localStorage.getItem('compras7') === null) {
          compras7 = []
        } else {
          compras7 = JSON.parse(localStorage.getItem('compras7'))
        }
        compras7.reverse()
        compras7.forEach(function (compra, monto) {
          // CREAR NUEVA COMPRA
          const compraNueva = document.createElement('div')
          compraNueva.classList.add('compra-nueva')
          // CREAR NUEVO LI MONTO
          const compraMonto = document.createElement('li')
          compraMonto.innerText = compra[1]
          if (compraMonto.innerText < 0) {
            compraMonto.classList.add('numero-positivo')
          } else {
            compraMonto.classList.add('numero-negativo')
          }
          compraMonto.classList.add('compra-monto')
          compraNueva.appendChild(compraMonto)
          // CREAR NUEVO LI ITEM
          const compraItem = document.createElement('li')
          compraItem.innerText = compra[0]
          compraItem.classList.add('compra-item')
          compraNueva.appendChild(compraItem)
          // CREAR NUEVO TRASH BUTTON
          const trashButton = document.createElement('button')
          trashButton.innerHTML = '<i class="fas fa-trash"></i>'
          trashButton.classList.add('trash-btn')
          compraNueva.appendChild(trashButton)
          // COMPRA NUEVA COMO NUEVO ITEM EN LA LISTA
          compras_list.appendChild(compraNueva)

          updateMonto()

          if (parseInt(resto) < 0) {
            $('#main-presupuesto-resto').addClass('numero-negativo')
            $('#main-presupuesto-resto').removeClass('numero-positivo')
          } else {
            $('#main-presupuesto-resto').addClass('numero-positivo')
            $('#main-presupuesto-resto').removeClass('numero-negativo')
          }
          if (parseInt($('#main-gastado')[0].innerText) > 0) {
            $('#main-gastado').addClass('numero-negativo')
            $('#main-gastado').removeClass('numero-positivo')
          } else {
            $('#main-gastado').addClass('numero-positivo')
            $('#main-gastado').removeClass('numero-negativo')
          }

        })

        /* ////////////////////////////////////////////////////////////////// */
        /* LOCAL STORAGE REFRESH SUMA TOTAL Y RESTO  */
        compras7.forEach(function (compra) {
          montoTotal += parseInt(compra[1])
        })
        $('#main-gastado')[0].innerText = montoTotal
        let montoBase7
        if (localStorage.getItem('montoBase7') === null) {
          montoBase7 = []
        } else {
          montoBase7 = JSON.parse(localStorage.getItem('montoBase7'))
        }
        $('#main-presupuesto-resto')[0].innerText = parseInt(montoBase7 - $('#main-gastado')[0].innerText)

        updateMonto()

        if (parseInt(resto) < 0) {
          $('#main-presupuesto-resto').addClass('numero-negativo')
          $('#main-presupuesto-resto').removeClass('numero-positivo')
        } else {
          $('#main-presupuesto-resto').addClass('numero-positivo')
          $('#main-presupuesto-resto').removeClass('numero-negativo')
        }
        if (parseInt($('#main-gastado')[0].innerText) > 0) {
          $('#main-gastado').addClass('numero-negativo')
          $('#main-gastado').removeClass('numero-positivo')
        } else {
          $('#main-gastado').addClass('numero-positivo')
          $('#main-gastado').removeClass('numero-negativo')
        }

        break

      /* ////////////////////////////////////////////////////////////////// */
      /* CASE BOTON 8 */
      /* ////////////////////////////////////////////////////////////////// */
      case $('#btn-screen-8').hasClass('screen-active'):
        let compras8
        if (localStorage.getItem('compras8') === null) {
          compras8 = []
        } else {
          compras8 = JSON.parse(localStorage.getItem('compras8'))
        }
        compras8.reverse()
        compras8.forEach(function (compra, monto) {
          // CREAR NUEVA COMPRA
          const compraNueva = document.createElement('div')
          compraNueva.classList.add('compra-nueva')
          // CREAR NUEVO LI MONTO
          const compraMonto = document.createElement('li')
          compraMonto.innerText = compra[1]
          if (compraMonto.innerText < 0) {
            compraMonto.classList.add('numero-positivo')
          } else {
            compraMonto.classList.add('numero-negativo')
          }
          compraMonto.classList.add('compra-monto')
          compraNueva.appendChild(compraMonto)
          // CREAR NUEVO LI ITEM
          const compraItem = document.createElement('li')
          compraItem.innerText = compra[0]
          compraItem.classList.add('compra-item')
          compraNueva.appendChild(compraItem)
          // CREAR NUEVO TRASH BUTTON
          const trashButton = document.createElement('button')
          trashButton.innerHTML = '<i class="fas fa-trash"></i>'
          trashButton.classList.add('trash-btn')
          compraNueva.appendChild(trashButton)
          // COMPRA NUEVA COMO NUEVO ITEM EN LA LISTA
          compras_list.appendChild(compraNueva)

          updateMonto()

          if (parseInt(resto) < 0) {
            $('#main-presupuesto-resto').addClass('numero-negativo')
            $('#main-presupuesto-resto').removeClass('numero-positivo')
          } else {
            $('#main-presupuesto-resto').addClass('numero-positivo')
            $('#main-presupuesto-resto').removeClass('numero-negativo')
          }
          if (parseInt($('#main-gastado')[0].innerText) > 0) {
            $('#main-gastado').addClass('numero-negativo')
            $('#main-gastado').removeClass('numero-positivo')
          } else {
            $('#main-gastado').addClass('numero-positivo')
            $('#main-gastado').removeClass('numero-negativo')
          }

        })

        /* ////////////////////////////////////////////////////////////////// */
        /* LOCAL STORAGE REFRESH SUMA TOTAL Y RESTO  */
        compras8.forEach(function (compra) {
          montoTotal += parseInt(compra[1])
        })
        $('#main-gastado')[0].innerText = montoTotal
        let montoBase8
        if (localStorage.getItem('montoBase8') === null) {
          montoBase8 = []
        } else {
          montoBase8 = JSON.parse(localStorage.getItem('montoBase8'))
        }
        $('#main-presupuesto-resto')[0].innerText = parseInt(montoBase8 - $('#main-gastado')[0].innerText)

        updateMonto()

        if (parseInt(resto) < 0) {
          $('#main-presupuesto-resto').addClass('numero-negativo')
          $('#main-presupuesto-resto').removeClass('numero-positivo')
        } else {
          $('#main-presupuesto-resto').addClass('numero-positivo')
          $('#main-presupuesto-resto').removeClass('numero-negativo')
        }
        if (parseInt($('#main-gastado')[0].innerText) > 0) {
          $('#main-gastado').addClass('numero-negativo')
          $('#main-gastado').removeClass('numero-positivo')
        } else {
          $('#main-gastado').addClass('numero-positivo')
          $('#main-gastado').removeClass('numero-negativo')
        }

        break

      /* ////////////////////////////////////////////////////////////////// */
      /* CASE BOTON 9 */
      /* ////////////////////////////////////////////////////////////////// */
      case $('#btn-screen-9').hasClass('screen-active'):
        let compras9
        if (localStorage.getItem('compras9') === null) {
          compras9 = []
        } else {
          compras9 = JSON.parse(localStorage.getItem('compras9'))
        }
        compras9.reverse()
        compras9.forEach(function (compra, monto) {
          // CREAR NUEVA COMPRA
          const compraNueva = document.createElement('div')
          compraNueva.classList.add('compra-nueva')
          // CREAR NUEVO LI MONTO
          const compraMonto = document.createElement('li')
          compraMonto.innerText = compra[1]
          if (compraMonto.innerText < 0) {
            compraMonto.classList.add('numero-positivo')
          } else {
            compraMonto.classList.add('numero-negativo')
          }
          compraMonto.classList.add('compra-monto')
          compraNueva.appendChild(compraMonto)
          // CREAR NUEVO LI ITEM
          const compraItem = document.createElement('li')
          compraItem.innerText = compra[0]
          compraItem.classList.add('compra-item')
          compraNueva.appendChild(compraItem)
          // CREAR NUEVO TRASH BUTTON
          const trashButton = document.createElement('button')
          trashButton.innerHTML = '<i class="fas fa-trash"></i>'
          trashButton.classList.add('trash-btn')
          compraNueva.appendChild(trashButton)
          // COMPRA NUEVA COMO NUEVO ITEM EN LA LISTA
          compras_list.appendChild(compraNueva)

          updateMonto()

          if (parseInt(resto) < 0) {
            $('#main-presupuesto-resto').addClass('numero-negativo')
            $('#main-presupuesto-resto').removeClass('numero-positivo')
          } else {
            $('#main-presupuesto-resto').addClass('numero-positivo')
            $('#main-presupuesto-resto').removeClass('numero-negativo')
          }
          if (parseInt($('#main-gastado')[0].innerText) > 0) {
            $('#main-gastado').addClass('numero-negativo')
            $('#main-gastado').removeClass('numero-positivo')
          } else {
            $('#main-gastado').addClass('numero-positivo')
            $('#main-gastado').removeClass('numero-negativo')
          }

        })

        /* ////////////////////////////////////////////////////////////////// */
        /* LOCAL STORAGE REFRESH SUMA TOTAL Y RESTO  */
        compras9.forEach(function (compra) {
          montoTotal += parseInt(compra[1])
        })
        $('#main-gastado')[0].innerText = montoTotal
        let montoBase9
        if (localStorage.getItem('montoBase9') === null) {
          montoBase9 = []
        } else {
          montoBase9 = JSON.parse(localStorage.getItem('montoBase9'))
        }
        $('#main-presupuesto-resto')[0].innerText = parseInt(montoBase9 - $('#main-gastado')[0].innerText)

        updateMonto()

        if (parseInt(resto) < 0) {
          $('#main-presupuesto-resto').addClass('numero-negativo')
          $('#main-presupuesto-resto').removeClass('numero-positivo')
        } else {
          $('#main-presupuesto-resto').addClass('numero-positivo')
          $('#main-presupuesto-resto').removeClass('numero-negativo')
        }
        if (parseInt($('#main-gastado')[0].innerText) > 0) {
          $('#main-gastado').addClass('numero-negativo')
          $('#main-gastado').removeClass('numero-positivo')
        } else {
          $('#main-gastado').addClass('numero-positivo')
          $('#main-gastado').removeClass('numero-negativo')
        }

        break

      /* ////////////////////////////////////////////////////////////////// */
      /* CASE BOTON 10 */
      /* ////////////////////////////////////////////////////////////////// */
      case $('#btn-screen-10').hasClass('screen-active'):
        let compras10
        if (localStorage.getItem('compras10') === null) {
          compras10 = []
        } else {
          compras10 = JSON.parse(localStorage.getItem('compras10'))
        }
        compras10.reverse()
        compras10.forEach(function (compra, monto) {
          // CREAR NUEVA COMPRA
          const compraNueva = document.createElement('div')
          compraNueva.classList.add('compra-nueva')
          // CREAR NUEVO LI MONTO
          const compraMonto = document.createElement('li')
          compraMonto.innerText = compra[1]
          if (compraMonto.innerText < 0) {
            compraMonto.classList.add('numero-positivo')
          } else {
            compraMonto.classList.add('numero-negativo')
          }
          compraMonto.classList.add('compra-monto')
          compraNueva.appendChild(compraMonto)
          // CREAR NUEVO LI ITEM
          const compraItem = document.createElement('li')
          compraItem.innerText = compra[0]
          compraItem.classList.add('compra-item')
          compraNueva.appendChild(compraItem)
          // CREAR NUEVO TRASH BUTTON
          const trashButton = document.createElement('button')
          trashButton.innerHTML = '<i class="fas fa-trash"></i>'
          trashButton.classList.add('trash-btn')
          compraNueva.appendChild(trashButton)
          // COMPRA NUEVA COMO NUEVO ITEM EN LA LISTA
          compras_list.appendChild(compraNueva)

          updateMonto()

          if (parseInt(resto) < 0) {
            $('#main-presupuesto-resto').addClass('numero-negativo')
            $('#main-presupuesto-resto').removeClass('numero-positivo')
          } else {
            $('#main-presupuesto-resto').addClass('numero-positivo')
            $('#main-presupuesto-resto').removeClass('numero-negativo')
          }
          if (parseInt($('#main-gastado')[0].innerText) > 0) {
            $('#main-gastado').addClass('numero-negativo')
            $('#main-gastado').removeClass('numero-positivo')
          } else {
            $('#main-gastado').addClass('numero-positivo')
            $('#main-gastado').removeClass('numero-negativo')
          }

        })

        /* ////////////////////////////////////////////////////////////////// */
        /* LOCAL STORAGE REFRESH SUMA TOTAL Y RESTO  */
        compras10.forEach(function (compra) {
          montoTotal += parseInt(compra[1])
        })
        $('#main-gastado')[0].innerText = montoTotal
        let montoBase10
        if (localStorage.getItem('montoBase10') === null) {
          montoBase10 = []
        } else {
          montoBase10 = JSON.parse(localStorage.getItem('montoBase10'))
        }
        $('#main-presupuesto-resto')[0].innerText = parseInt(montoBase10 - $('#main-gastado')[0].innerText)

        updateMonto()

        if (parseInt(resto) < 0) {
          $('#main-presupuesto-resto').addClass('numero-negativo')
          $('#main-presupuesto-resto').removeClass('numero-positivo')
        } else {
          $('#main-presupuesto-resto').addClass('numero-positivo')
          $('#main-presupuesto-resto').removeClass('numero-negativo')
        }
        if (parseInt($('#main-gastado')[0].innerText) > 0) {
          $('#main-gastado').addClass('numero-negativo')
          $('#main-gastado').removeClass('numero-positivo')
        } else {
          $('#main-gastado').addClass('numero-positivo')
          $('#main-gastado').removeClass('numero-negativo')
        }

        break

      /* ////////////////////////////////////////////////////////////////// */
      /* CASE BOTON 11 */
      /* ////////////////////////////////////////////////////////////////// */
      case $('#btn-screen-11').hasClass('screen-active'):
        let compras11
        if (localStorage.getItem('compras11') === null) {
          compras11 = []
        } else {
          compras11 = JSON.parse(localStorage.getItem('compras11'))
        }
        compras11.reverse()
        compras11.forEach(function (compra, monto) {
          // CREAR NUEVA COMPRA
          const compraNueva = document.createElement('div')
          compraNueva.classList.add('compra-nueva')
          // CREAR NUEVO LI MONTO
          const compraMonto = document.createElement('li')
          compraMonto.innerText = compra[1]
          if (compraMonto.innerText < 0) {
            compraMonto.classList.add('numero-positivo')
          } else {
            compraMonto.classList.add('numero-negativo')
          }
          compraMonto.classList.add('compra-monto')
          compraNueva.appendChild(compraMonto)
          // CREAR NUEVO LI ITEM
          const compraItem = document.createElement('li')
          compraItem.innerText = compra[0]
          compraItem.classList.add('compra-item')
          compraNueva.appendChild(compraItem)
          // CREAR NUEVO TRASH BUTTON
          const trashButton = document.createElement('button')
          trashButton.innerHTML = '<i class="fas fa-trash"></i>'
          trashButton.classList.add('trash-btn')
          compraNueva.appendChild(trashButton)
          // COMPRA NUEVA COMO NUEVO ITEM EN LA LISTA
          compras_list.appendChild(compraNueva)

          updateMonto()

          if (parseInt(resto) < 0) {
            $('#main-presupuesto-resto').addClass('numero-negativo')
            $('#main-presupuesto-resto').removeClass('numero-positivo')
          } else {
            $('#main-presupuesto-resto').addClass('numero-positivo')
            $('#main-presupuesto-resto').removeClass('numero-negativo')
          }
          if (parseInt($('#main-gastado')[0].innerText) > 0) {
            $('#main-gastado').addClass('numero-negativo')
            $('#main-gastado').removeClass('numero-positivo')
          } else {
            $('#main-gastado').addClass('numero-positivo')
            $('#main-gastado').removeClass('numero-negativo')
          }

        })

        /* ////////////////////////////////////////////////////////////////// */
        /* LOCAL STORAGE REFRESH SUMA TOTAL Y RESTO  */
        compras11.forEach(function (compra) {
          montoTotal += parseInt(compra[1])
        })
        $('#main-gastado')[0].innerText = montoTotal
        let montoBase11
        if (localStorage.getItem('montoBase11') === null) {
          montoBase11 = []
        } else {
          montoBase11 = JSON.parse(localStorage.getItem('montoBase11'))
        }
        $('#main-presupuesto-resto')[0].innerText = parseInt(montoBase11 - $('#main-gastado')[0].innerText)

        updateMonto()

        if (parseInt(resto) < 0) {
          $('#main-presupuesto-resto').addClass('numero-negativo')
          $('#main-presupuesto-resto').removeClass('numero-positivo')
        } else {
          $('#main-presupuesto-resto').addClass('numero-positivo')
          $('#main-presupuesto-resto').removeClass('numero-negativo')
        }
        if (parseInt($('#main-gastado')[0].innerText) > 0) {
          $('#main-gastado').addClass('numero-negativo')
          $('#main-gastado').removeClass('numero-positivo')
        } else {
          $('#main-gastado').addClass('numero-positivo')
          $('#main-gastado').removeClass('numero-negativo')
        }

        break

      /* ////////////////////////////////////////////////////////////////// */
      /* CASE BOTON 12 */
      /* ////////////////////////////////////////////////////////////////// */
      case $('#btn-screen-12').hasClass('screen-active'):
        let compras12
        if (localStorage.getItem('compras12') === null) {
          compras12 = []
        } else {
          compras12 = JSON.parse(localStorage.getItem('compras12'))
        }
        compras12.reverse()
        compras12.forEach(function (compra, monto) {
          // CREAR NUEVA COMPRA
          const compraNueva = document.createElement('div')
          compraNueva.classList.add('compra-nueva')
          // CREAR NUEVO LI MONTO
          const compraMonto = document.createElement('li')
          compraMonto.innerText = compra[1]
          if (compraMonto.innerText < 0) {
            compraMonto.classList.add('numero-positivo')
          } else {
            compraMonto.classList.add('numero-negativo')
          }
          compraMonto.classList.add('compra-monto')
          compraNueva.appendChild(compraMonto)
          // CREAR NUEVO LI ITEM
          const compraItem = document.createElement('li')
          compraItem.innerText = compra[0]
          compraItem.classList.add('compra-item')
          compraNueva.appendChild(compraItem)
          // CREAR NUEVO TRASH BUTTON
          const trashButton = document.createElement('button')
          trashButton.innerHTML = '<i class="fas fa-trash"></i>'
          trashButton.classList.add('trash-btn')
          compraNueva.appendChild(trashButton)
          // COMPRA NUEVA COMO NUEVO ITEM EN LA LISTA
          compras_list.appendChild(compraNueva)

          updateMonto()

          if (parseInt(resto) < 0) {
            $('#main-presupuesto-resto').addClass('numero-negativo')
            $('#main-presupuesto-resto').removeClass('numero-positivo')
          } else {
            $('#main-presupuesto-resto').addClass('numero-positivo')
            $('#main-presupuesto-resto').removeClass('numero-negativo')
          }
          if (parseInt($('#main-gastado')[0].innerText) > 0) {
            $('#main-gastado').addClass('numero-negativo')
            $('#main-gastado').removeClass('numero-positivo')
          } else {
            $('#main-gastado').addClass('numero-positivo')
            $('#main-gastado').removeClass('numero-negativo')
          }

        })

        /* ////////////////////////////////////////////////////////////////// */
        /* LOCAL STORAGE REFRESH SUMA TOTAL Y RESTO  */
        compras12.forEach(function (compra) {
          montoTotal += parseInt(compra[1])
        })
        $('#main-gastado')[0].innerText = montoTotal
        let montoBase12
        if (localStorage.getItem('montoBase12') === null) {
          montoBase12 = []
        } else {
          montoBase12 = JSON.parse(localStorage.getItem('montoBase12'))
        }
        $('#main-presupuesto-resto')[0].innerText = parseInt(montoBase12 - $('#main-gastado')[0].innerText)

        updateMonto()

        if (parseInt(resto) < 0) {
          $('#main-presupuesto-resto').addClass('numero-negativo')
          $('#main-presupuesto-resto').removeClass('numero-positivo')
        } else {
          $('#main-presupuesto-resto').addClass('numero-positivo')
          $('#main-presupuesto-resto').removeClass('numero-negativo')
        }
        if (parseInt($('#main-gastado')[0].innerText) > 0) {
          $('#main-gastado').addClass('numero-negativo')
          $('#main-gastado').removeClass('numero-positivo')
        } else {
          $('#main-gastado').addClass('numero-positivo')
          $('#main-gastado').removeClass('numero-negativo')
        }

        break

      /* ////////////////////////////////////////////////////////////////// */
      /* CASE BOTON 13 */
      /* ////////////////////////////////////////////////////////////////// */
      case $('#btn-screen-13').hasClass('screen-active'):
        let compras13
        if (localStorage.getItem('compras13') === null) {
          compras13 = []
        } else {
          compras13 = JSON.parse(localStorage.getItem('compras13'))
        }
        compras13.reverse()
        compras13.forEach(function (compra, monto) {
          // CREAR NUEVA COMPRA
          const compraNueva = document.createElement('div')
          compraNueva.classList.add('compra-nueva')
          // CREAR NUEVO LI MONTO
          const compraMonto = document.createElement('li')
          compraMonto.innerText = compra[1]
          if (compraMonto.innerText < 0) {
            compraMonto.classList.add('numero-positivo')
          } else {
            compraMonto.classList.add('numero-negativo')
          }
          compraMonto.classList.add('compra-monto')
          compraNueva.appendChild(compraMonto)
          // CREAR NUEVO LI ITEM
          const compraItem = document.createElement('li')
          compraItem.innerText = compra[0]
          compraItem.classList.add('compra-item')
          compraNueva.appendChild(compraItem)
          // CREAR NUEVO TRASH BUTTON
          const trashButton = document.createElement('button')
          trashButton.innerHTML = '<i class="fas fa-trash"></i>'
          trashButton.classList.add('trash-btn')
          compraNueva.appendChild(trashButton)
          // COMPRA NUEVA COMO NUEVO ITEM EN LA LISTA
          compras_list.appendChild(compraNueva)

          updateMonto()

          if (parseInt(resto) < 0) {
            $('#main-presupuesto-resto').addClass('numero-negativo')
            $('#main-presupuesto-resto').removeClass('numero-positivo')
          } else {
            $('#main-presupuesto-resto').addClass('numero-positivo')
            $('#main-presupuesto-resto').removeClass('numero-negativo')
          }
          if (parseInt($('#main-gastado')[0].innerText) > 0) {
            $('#main-gastado').addClass('numero-negativo')
            $('#main-gastado').removeClass('numero-positivo')
          } else {
            $('#main-gastado').addClass('numero-positivo')
            $('#main-gastado').removeClass('numero-negativo')
          }

        })

        /* ////////////////////////////////////////////////////////////////// */
        /* LOCAL STORAGE REFRESH SUMA TOTAL Y RESTO  */
        compras13.forEach(function (compra) {
          montoTotal += parseInt(compra[1])
        })
        $('#main-gastado')[0].innerText = montoTotal
        let montoBase13
        if (localStorage.getItem('montoBase13') === null) {
          montoBase13 = []
        } else {
          montoBase13 = JSON.parse(localStorage.getItem('montoBase13'))
        }
        $('#main-presupuesto-resto')[0].innerText = parseInt(montoBase13 - $('#main-gastado')[0].innerText)

        updateMonto()

        if (parseInt(resto) < 0) {
          $('#main-presupuesto-resto').addClass('numero-negativo')
          $('#main-presupuesto-resto').removeClass('numero-positivo')
        } else {
          $('#main-presupuesto-resto').addClass('numero-positivo')
          $('#main-presupuesto-resto').removeClass('numero-negativo')
        }
        if (parseInt($('#main-gastado')[0].innerText) > 0) {
          $('#main-gastado').addClass('numero-negativo')
          $('#main-gastado').removeClass('numero-positivo')
        } else {
          $('#main-gastado').addClass('numero-positivo')
          $('#main-gastado').removeClass('numero-negativo')
        }

        break

    }
  }
})

