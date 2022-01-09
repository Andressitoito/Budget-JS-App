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
      activeScreen = [['btn-screen-1']]
      localStorage.setItem('activeScreen', JSON.stringify(activeScreen))
    } else {

      switch (true) {

        case JSON.parse(activeScreen)[0] == 'btn-screen-1':
          $('#btn-screen-1').addClass('screen-active')
          $('#btn-screen-2').removeClass('screen-active')
          $('#btn-screen-3').removeClass('screen-active')

          break
        case JSON.parse(activeScreen)[0] == 'btn-screen-2':
          $('#btn-screen-1').removeClass('screen-active')
          $('#btn-screen-2').addClass('screen-active')
          $('#btn-screen-3').removeClass('screen-active')

          break
        case JSON.parse(activeScreen)[0] == 'btn-screen-3':
          $('#btn-screen-1').removeClass('screen-active')
          $('#btn-screen-2').removeClass('screen-active')
          $('#btn-screen-3').addClass('screen-active')

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

    }
    updateTitle()
    updateMonto()
    // let delList = document.querySelector('.compras-list')
    // console.log(delList.children)
    
    // delList.children.remove()
    $('.compras-list').empty()
    getCompras()
    // location.reload();

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
    }
  }

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
          montoBase3 = JSON.parse(localStorage.getItem('montoBase2'))
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

    }

  }

  /* ////////////////////////////////////////////////////////////////// */
  /* LOCAL STORAGE GET COMPRAS */
  function getCompras() {

    let montoTotal = 0
    switch (true) {

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
    }
  }
})

