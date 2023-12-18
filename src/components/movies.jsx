import React from 'react'
const movies = () => {
return (
<>
<div className="movieinfo">
<div className='micontent'>
<h1>Trending Now</h1>
<div class="cards">
<div class="wrapper">
    <div class="card card--rounded wrapper__front">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRw6CELmOFrRGwZUNM86Fy_1ZH08Pk6Ej45l1rm7L6OQtBmjRHEzJP-Sm2kXsBh7zepgYwrAqRWGGO_5CWMCBLtYdYKV5VY3wadRT_7sGbPvU7wuENsrb2v_QR1UwWPdoFtM.jpg?r=a07" alt="money heist series banner" />
      </div>
    </div>
    <div class="card card--rounded wrapper__back">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRw6CELmOFrRGwZUNM86Fy_1ZH08Pk6Ej45l1rm7L6OQtBmjRHEzJP-Sm2kXsBh7zepgYwrAqRWGGO_5CWMCBLtYdYKV5VY3wadRT_7sGbPvU7wuENsrb2v_QR1UwWPdoFtM.jpg?r=a07" alt="money heist series banner" />
      </div>
      <div class="card__body">
        <div class="flex justify-between items-center">
          <div>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M21.44 10.72L5.96 2.98A1.38 1.38 0 004 4.213v15.474a1.373 1.373 0 002 1.233l15.44-7.74a1.38 1.38 0 000-2.467v.007z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M12 0a1.5 1.5 0 011.5 1.5v9h9a1.5 1.5 0 110 3h-9v9a1.5 1.5 0 11-3 0v-9h-9a1.5 1.5 0 110-3h9v-9A1.5 1.5 0 0112 0z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.875 10.5h-3.75C.504 10.5 0 11.004 0 11.625v11.25C0 23.496.504 24 1.125 24h3.75C5.496 24 6 23.496 6 22.875v-11.25c0-.621-.504-1.125-1.125-1.125zM3 22.125a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zM18 3.818c0 1.988-1.217 3.104-1.56 4.432h4.768c1.566 0 2.785 1.3 2.792 2.723.004.841-.354 1.746-.911 2.306l-.005.006c.46 1.094.386 2.626-.437 3.725.407 1.213-.003 2.705-.768 3.504.202.825.106 1.527-.288 2.092C20.634 23.981 18.263 24 16.258 24h-.133c-2.264 0-4.116-.825-5.605-1.487-.748-.333-1.726-.745-2.468-.759a.563.563 0 01-.552-.562v-10.02c0-.15.06-.294.167-.4 1.857-1.835 2.655-3.777 4.177-5.302.694-.695.947-1.745 1.19-2.76.209-.868.645-2.71 1.591-2.71C15.75 0 18 .375 18 3.818z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.856 10.561a4.353 4.353 0 00-.421-2.952 4.52 4.52 0 00-.813-3.14C20.578 1.848 18.943 0 15.328 0h-1.041C9.43 0 7.922 1.875 6 1.875h-.508A1.494 1.494 0 004.5 1.5h-3A1.5 1.5 0 000 3v11.25a1.5 1.5 0 001.5 1.5h3c.555 0 1.04-.302 1.299-.75h.33c.898.795 2.157 2.843 3.223 3.91.641.64.476 5.09 3.364 5.09 2.7 0 4.466-1.497 4.466-4.91 0-.862-.184-1.58-.415-2.18h1.71c2.278 0 4.023-1.95 4.023-4.012 0-.898-.233-1.64-.644-2.337zM3 13.875a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm15.477.784h-4.874c0 1.773 1.329 2.596 1.329 4.432 0 1.113 0 2.659-2.216 2.659-.886-.886-.443-3.102-1.773-4.432-1.245-1.245-3.102-4.568-4.431-4.568H6V4.023c2.513 0 4.688-1.773 8.046-1.773h1.772c1.665 0 2.851.803 2.49 3.09.713.382 1.243 1.708.654 2.698 1.012.956.876 2.394.244 3.076.443 0 1.048.886 1.044 1.772-.004.887-.783 1.773-1.773 1.773z" />
              </svg>
            </button>
          </div>
          <button class="btn btn--transparent btn--circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M2.469 6.969a.75.75 0 011.062 0L12 15.439l8.469-8.47a.75.75 0 111.062 1.062l-9 9a.75.75 0 01-1.062 0l-9-9a.75.75 0 010-1.062z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <p class="card__title text">
          <span class="text--bold">P1:E1</span>"Episode 1"
        </p>
        <div class="card__progress flex justify-between items-center">
          <div class="progressbar">
            <div class="progressbar__status"></div>
          </div>
          <span class="text text--bold text--muted">46 of 48m</span>
        </div>
      </div>
    </div>
  </div>
  <div class="wrapper">
    <div class="card card--rounded wrapper__front">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdNgatqAEYmpnLfi6tjKSmgKb2busntH34VDgo3JMSk7y6Jdwj4PXUFbCXe_YQVzjM69gNVoqTAEF82aMjY_KMlRHPJCtrh3k2d0UdqH1kxnACnKx2EBGZ4A1Y9O0joN9bXf.jpg?r=8a4" alt="money heist series banner" />
      </div>
    </div>
    <div class="card card--rounded wrapper__back">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdNgatqAEYmpnLfi6tjKSmgKb2busntH34VDgo3JMSk7y6Jdwj4PXUFbCXe_YQVzjM69gNVoqTAEF82aMjY_KMlRHPJCtrh3k2d0UdqH1kxnACnKx2EBGZ4A1Y9O0joN9bXf.jpg?r=8a4" alt="money heist series banner" />
      </div>
      <div class="card__body">
        <div class="flex justify-between items-center">
          <div>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M21.44 10.72L5.96 2.98A1.38 1.38 0 004 4.213v15.474a1.373 1.373 0 002 1.233l15.44-7.74a1.38 1.38 0 000-2.467v.007z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M12 0a1.5 1.5 0 011.5 1.5v9h9a1.5 1.5 0 110 3h-9v9a1.5 1.5 0 11-3 0v-9h-9a1.5 1.5 0 110-3h9v-9A1.5 1.5 0 0112 0z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.875 10.5h-3.75C.504 10.5 0 11.004 0 11.625v11.25C0 23.496.504 24 1.125 24h3.75C5.496 24 6 23.496 6 22.875v-11.25c0-.621-.504-1.125-1.125-1.125zM3 22.125a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zM18 3.818c0 1.988-1.217 3.104-1.56 4.432h4.768c1.566 0 2.785 1.3 2.792 2.723.004.841-.354 1.746-.911 2.306l-.005.006c.46 1.094.386 2.626-.437 3.725.407 1.213-.003 2.705-.768 3.504.202.825.106 1.527-.288 2.092C20.634 23.981 18.263 24 16.258 24h-.133c-2.264 0-4.116-.825-5.605-1.487-.748-.333-1.726-.745-2.468-.759a.563.563 0 01-.552-.562v-10.02c0-.15.06-.294.167-.4 1.857-1.835 2.655-3.777 4.177-5.302.694-.695.947-1.745 1.19-2.76.209-.868.645-2.71 1.591-2.71C15.75 0 18 .375 18 3.818z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.856 10.561a4.353 4.353 0 00-.421-2.952 4.52 4.52 0 00-.813-3.14C20.578 1.848 18.943 0 15.328 0h-1.041C9.43 0 7.922 1.875 6 1.875h-.508A1.494 1.494 0 004.5 1.5h-3A1.5 1.5 0 000 3v11.25a1.5 1.5 0 001.5 1.5h3c.555 0 1.04-.302 1.299-.75h.33c.898.795 2.157 2.843 3.223 3.91.641.64.476 5.09 3.364 5.09 2.7 0 4.466-1.497 4.466-4.91 0-.862-.184-1.58-.415-2.18h1.71c2.278 0 4.023-1.95 4.023-4.012 0-.898-.233-1.64-.644-2.337zM3 13.875a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm15.477.784h-4.874c0 1.773 1.329 2.596 1.329 4.432 0 1.113 0 2.659-2.216 2.659-.886-.886-.443-3.102-1.773-4.432-1.245-1.245-3.102-4.568-4.431-4.568H6V4.023c2.513 0 4.688-1.773 8.046-1.773h1.772c1.665 0 2.851.803 2.49 3.09.713.382 1.243 1.708.654 2.698 1.012.956.876 2.394.244 3.076.443 0 1.048.886 1.044 1.772-.004.887-.783 1.773-1.773 1.773z" />
              </svg>
            </button>
          </div>
          <button class="btn btn--transparent btn--circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M2.469 6.969a.75.75 0 011.062 0L12 15.439l8.469-8.47a.75.75 0 111.062 1.062l-9 9a.75.75 0 01-1.062 0l-9-9a.75.75 0 010-1.062z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <p class="card__title text">
          <span class="text--bold">P1:E1</span>"Episode 1"
        </p>
        <div class="card__progress flex justify-between items-center">
          <div class="progressbar">
            <div class="progressbar__status"></div>
          </div>
          <span class="text text--bold text--muted">46 of 48m</span>
        </div>
      </div>
    </div>
  </div>

  <div class="wrapper">
    <div class="card card--rounded wrapper__front">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABc2m2gAl_NDwPZf4vpHaM-Y9t-j4yRhzPyCEUtIdJfp1mr0xGmdtCeIbpoU2FLyrv5E5TfDd3P0R-RS4xYThSAuAzxdFIECBPWs.jpg?r=4fc" alt="snowpiercer series banner" />
      </div>
    </div>
    <div class="card card--rounded wrapper__back">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABc2m2gAl_NDwPZf4vpHaM-Y9t-j4yRhzPyCEUtIdJfp1mr0xGmdtCeIbpoU2FLyrv5E5TfDd3P0R-RS4xYThSAuAzxdFIECBPWs.jpg?r=4fc" alt="snowpiercer series banner" />
      </div>
      <div class="card__body">
        <div class="flex justify-between items-center">
          <div>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M21.44 10.72L5.96 2.98A1.38 1.38 0 004 4.213v15.474a1.373 1.373 0 002 1.233l15.44-7.74a1.38 1.38 0 000-2.467v.007z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M12 0a1.5 1.5 0 011.5 1.5v9h9a1.5 1.5 0 110 3h-9v9a1.5 1.5 0 11-3 0v-9h-9a1.5 1.5 0 110-3h9v-9A1.5 1.5 0 0112 0z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.875 10.5h-3.75C.504 10.5 0 11.004 0 11.625v11.25C0 23.496.504 24 1.125 24h3.75C5.496 24 6 23.496 6 22.875v-11.25c0-.621-.504-1.125-1.125-1.125zM3 22.125a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zM18 3.818c0 1.988-1.217 3.104-1.56 4.432h4.768c1.566 0 2.785 1.3 2.792 2.723.004.841-.354 1.746-.911 2.306l-.005.006c.46 1.094.386 2.626-.437 3.725.407 1.213-.003 2.705-.768 3.504.202.825.106 1.527-.288 2.092C20.634 23.981 18.263 24 16.258 24h-.133c-2.264 0-4.116-.825-5.605-1.487-.748-.333-1.726-.745-2.468-.759a.563.563 0 01-.552-.562v-10.02c0-.15.06-.294.167-.4 1.857-1.835 2.655-3.777 4.177-5.302.694-.695.947-1.745 1.19-2.76.209-.868.645-2.71 1.591-2.71C15.75 0 18 .375 18 3.818z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.856 10.561a4.353 4.353 0 00-.421-2.952 4.52 4.52 0 00-.813-3.14C20.578 1.848 18.943 0 15.328 0h-1.041C9.43 0 7.922 1.875 6 1.875h-.508A1.494 1.494 0 004.5 1.5h-3A1.5 1.5 0 000 3v11.25a1.5 1.5 0 001.5 1.5h3c.555 0 1.04-.302 1.299-.75h.33c.898.795 2.157 2.843 3.223 3.91.641.64.476 5.09 3.364 5.09 2.7 0 4.466-1.497 4.466-4.91 0-.862-.184-1.58-.415-2.18h1.71c2.278 0 4.023-1.95 4.023-4.012 0-.898-.233-1.64-.644-2.337zM3 13.875a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm15.477.784h-4.874c0 1.773 1.329 2.596 1.329 4.432 0 1.113 0 2.659-2.216 2.659-.886-.886-.443-3.102-1.773-4.432-1.245-1.245-3.102-4.568-4.431-4.568H6V4.023c2.513 0 4.688-1.773 8.046-1.773h1.772c1.665 0 2.851.803 2.49 3.09.713.382 1.243 1.708.654 2.698 1.012.956.876 2.394.244 3.076.443 0 1.048.886 1.044 1.772-.004.887-.783 1.773-1.773 1.773z" />
              </svg>
            </button>
          </div>
          <button class="btn btn--transparent btn--circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M2.469 6.969a.75.75 0 011.062 0L12 15.439l8.469-8.47a.75.75 0 111.062 1.062l-9 9a.75.75 0 01-1.062 0l-9-9a.75.75 0 010-1.062z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <p class="card__title text">
          <span class="text--bold">S1:E1</span>"First, the Weather Changed"
        </p>
        <div class="card__progress flex justify-between items-center">
        </div>
      </div>
    </div>
  </div>
  <div class="wrapper">
    <div class="card card--rounded wrapper__front">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeo-6jbft5QfJKW4EQtQXlDIogn8ptYz5xpO-nGXd_FvTQstzRkpfeLhFf07P0FNUwY0JCdee1FdJ9L0RkCMHxZ8yFLYhmb2Sg9bpZhbHUDWj6Xm_fIjb8BJg2p96D2BLEXG.jpg?r=f9b" alt="queens gambit series banner" />
      </div>
    </div>
    <div class="card card--rounded wrapper__back">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeo-6jbft5QfJKW4EQtQXlDIogn8ptYz5xpO-nGXd_FvTQstzRkpfeLhFf07P0FNUwY0JCdee1FdJ9L0RkCMHxZ8yFLYhmb2Sg9bpZhbHUDWj6Xm_fIjb8BJg2p96D2BLEXG.jpg?r=f9b" alt="queens gambit series banner" />
      </div>
      <div class="card__body">
        <div class="flex justify-between items-center">
          <div>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M21.44 10.72L5.96 2.98A1.38 1.38 0 004 4.213v15.474a1.373 1.373 0 002 1.233l15.44-7.74a1.38 1.38 0 000-2.467v.007z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M12 0a1.5 1.5 0 011.5 1.5v9h9a1.5 1.5 0 110 3h-9v9a1.5 1.5 0 11-3 0v-9h-9a1.5 1.5 0 110-3h9v-9A1.5 1.5 0 0112 0z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.875 10.5h-3.75C.504 10.5 0 11.004 0 11.625v11.25C0 23.496.504 24 1.125 24h3.75C5.496 24 6 23.496 6 22.875v-11.25c0-.621-.504-1.125-1.125-1.125zM3 22.125a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zM18 3.818c0 1.988-1.217 3.104-1.56 4.432h4.768c1.566 0 2.785 1.3 2.792 2.723.004.841-.354 1.746-.911 2.306l-.005.006c.46 1.094.386 2.626-.437 3.725.407 1.213-.003 2.705-.768 3.504.202.825.106 1.527-.288 2.092C20.634 23.981 18.263 24 16.258 24h-.133c-2.264 0-4.116-.825-5.605-1.487-.748-.333-1.726-.745-2.468-.759a.563.563 0 01-.552-.562v-10.02c0-.15.06-.294.167-.4 1.857-1.835 2.655-3.777 4.177-5.302.694-.695.947-1.745 1.19-2.76.209-.868.645-2.71 1.591-2.71C15.75 0 18 .375 18 3.818z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.856 10.561a4.353 4.353 0 00-.421-2.952 4.52 4.52 0 00-.813-3.14C20.578 1.848 18.943 0 15.328 0h-1.041C9.43 0 7.922 1.875 6 1.875h-.508A1.494 1.494 0 004.5 1.5h-3A1.5 1.5 0 000 3v11.25a1.5 1.5 0 001.5 1.5h3c.555 0 1.04-.302 1.299-.75h.33c.898.795 2.157 2.843 3.223 3.91.641.64.476 5.09 3.364 5.09 2.7 0 4.466-1.497 4.466-4.91 0-.862-.184-1.58-.415-2.18h1.71c2.278 0 4.023-1.95 4.023-4.012 0-.898-.233-1.64-.644-2.337zM3 13.875a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm15.477.784h-4.874c0 1.773 1.329 2.596 1.329 4.432 0 1.113 0 2.659-2.216 2.659-.886-.886-.443-3.102-1.773-4.432-1.245-1.245-3.102-4.568-4.431-4.568H6V4.023c2.513 0 4.688-1.773 8.046-1.773h1.772c1.665 0 2.851.803 2.49 3.09.713.382 1.243 1.708.654 2.698 1.012.956.876 2.394.244 3.076.443 0 1.048.886 1.044 1.772-.004.887-.783 1.773-1.773 1.773z" />
              </svg>
            </button>
          </div>
          <button class="btn btn--transparent btn--circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M2.469 6.969a.75.75 0 011.062 0L12 15.439l8.469-8.47a.75.75 0 111.062 1.062l-9 9a.75.75 0 01-1.062 0l-9-9a.75.75 0 010-1.062z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <p class="card__title text">
          <span class="text--bold">S1:E2</span>Exchanges
        </p>
        <div class="card__progress flex justify-between items-center">
          <div class="progressbar">
            <div class="progressbar__status"></div>
          </div>
          <span class="text text--bold text--muted">60 of 65m</span>
        </div>
      </div>
    </div>
  </div>
  <div class="wrapper">
    <div class="card card--rounded wrapper__front">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQpnK-uuOe7H7X3RMJKcroyNCybbVqlpkQEBlMZSM0nhbfjXH5QtVXtsUJ1JaWAslHy83WBoWpKciuuoURdF9Ccug19-wV3w-Sghdp4FMz7pwnwewfUwIm5EfLzL9PqT-ApC.jpg?r=ea5" alt="south park series banner" />
      </div>
    </div>
    <div class="card card--rounded wrapper__back">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQpnK-uuOe7H7X3RMJKcroyNCybbVqlpkQEBlMZSM0nhbfjXH5QtVXtsUJ1JaWAslHy83WBoWpKciuuoURdF9Ccug19-wV3w-Sghdp4FMz7pwnwewfUwIm5EfLzL9PqT-ApC.jpg?r=ea5" alt="south park series banner" />
      </div>
      <div class="card__body">
        <div class="flex justify-between items-center">
          <div>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M21.44 10.72L5.96 2.98A1.38 1.38 0 004 4.213v15.474a1.373 1.373 0 002 1.233l15.44-7.74a1.38 1.38 0 000-2.467v.007z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M12 0a1.5 1.5 0 011.5 1.5v9h9a1.5 1.5 0 110 3h-9v9a1.5 1.5 0 11-3 0v-9h-9a1.5 1.5 0 110-3h9v-9A1.5 1.5 0 0112 0z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.875 10.5h-3.75C.504 10.5 0 11.004 0 11.625v11.25C0 23.496.504 24 1.125 24h3.75C5.496 24 6 23.496 6 22.875v-11.25c0-.621-.504-1.125-1.125-1.125zM3 22.125a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zM18 3.818c0 1.988-1.217 3.104-1.56 4.432h4.768c1.566 0 2.785 1.3 2.792 2.723.004.841-.354 1.746-.911 2.306l-.005.006c.46 1.094.386 2.626-.437 3.725.407 1.213-.003 2.705-.768 3.504.202.825.106 1.527-.288 2.092C20.634 23.981 18.263 24 16.258 24h-.133c-2.264 0-4.116-.825-5.605-1.487-.748-.333-1.726-.745-2.468-.759a.563.563 0 01-.552-.562v-10.02c0-.15.06-.294.167-.4 1.857-1.835 2.655-3.777 4.177-5.302.694-.695.947-1.745 1.19-2.76.209-.868.645-2.71 1.591-2.71C15.75 0 18 .375 18 3.818z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.856 10.561a4.353 4.353 0 00-.421-2.952 4.52 4.52 0 00-.813-3.14C20.578 1.848 18.943 0 15.328 0h-1.041C9.43 0 7.922 1.875 6 1.875h-.508A1.494 1.494 0 004.5 1.5h-3A1.5 1.5 0 000 3v11.25a1.5 1.5 0 001.5 1.5h3c.555 0 1.04-.302 1.299-.75h.33c.898.795 2.157 2.843 3.223 3.91.641.64.476 5.09 3.364 5.09 2.7 0 4.466-1.497 4.466-4.91 0-.862-.184-1.58-.415-2.18h1.71c2.278 0 4.023-1.95 4.023-4.012 0-.898-.233-1.64-.644-2.337zM3 13.875a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm15.477.784h-4.874c0 1.773 1.329 2.596 1.329 4.432 0 1.113 0 2.659-2.216 2.659-.886-.886-.443-3.102-1.773-4.432-1.245-1.245-3.102-4.568-4.431-4.568H6V4.023c2.513 0 4.688-1.773 8.046-1.773h1.772c1.665 0 2.851.803 2.49 3.09.713.382 1.243 1.708.654 2.698 1.012.956.876 2.394.244 3.076.443 0 1.048.886 1.044 1.772-.004.887-.783 1.773-1.773 1.773z" />
              </svg>
            </button>
          </div>
          <button class="btn btn--transparent btn--circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M2.469 6.969a.75.75 0 011.062 0L12 15.439l8.469-8.47a.75.75 0 111.062 1.062l-9 9a.75.75 0 01-1.062 0l-9-9a.75.75 0 010-1.062z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <p class="card__title text">
          <span class="text--bold">S17:E1</span>Let Go, Let Gov
        </p>
        <div class="card__progress flex justify-between items-center">
          <div class="progressbar">
            <div class="progressbar__status"></div>
          </div>
          <span class="text text--bold text--muted">21 of 22m</span>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<div className='micontent'>
    <h1>Continue Watching...</h1>
<div class="cards">
  <div class="wrapper">
    <div class="card card--rounded wrapper__front">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABa3IC_4NEM9BPnW1DF6eo36jJTV1mknNgsj_epYqs1th1b4eyIJG9sSffOuRDxuawJCVyQzI-FlCQPbGKeu13DDle598siM-L7lk2Smra-exgr1xHNQw2rfdBy-6EPU7QLCY.jpg?r=a13" alt="snowpiercer series banner" />
      </div>
    </div>
    <div class="card card--rounded wrapper__back">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABa3IC_4NEM9BPnW1DF6eo36jJTV1mknNgsj_epYqs1th1b4eyIJG9sSffOuRDxuawJCVyQzI-FlCQPbGKeu13DDle598siM-L7lk2Smra-exgr1xHNQw2rfdBy-6EPU7QLCY.jpg?r=a13" alt="snowpiercer series banner" />
      </div>
      <div class="card__body">
        <div class="flex justify-between items-center">
          <div>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M21.44 10.72L5.96 2.98A1.38 1.38 0 004 4.213v15.474a1.373 1.373 0 002 1.233l15.44-7.74a1.38 1.38 0 000-2.467v.007z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M12 0a1.5 1.5 0 011.5 1.5v9h9a1.5 1.5 0 110 3h-9v9a1.5 1.5 0 11-3 0v-9h-9a1.5 1.5 0 110-3h9v-9A1.5 1.5 0 0112 0z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.875 10.5h-3.75C.504 10.5 0 11.004 0 11.625v11.25C0 23.496.504 24 1.125 24h3.75C5.496 24 6 23.496 6 22.875v-11.25c0-.621-.504-1.125-1.125-1.125zM3 22.125a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zM18 3.818c0 1.988-1.217 3.104-1.56 4.432h4.768c1.566 0 2.785 1.3 2.792 2.723.004.841-.354 1.746-.911 2.306l-.005.006c.46 1.094.386 2.626-.437 3.725.407 1.213-.003 2.705-.768 3.504.202.825.106 1.527-.288 2.092C20.634 23.981 18.263 24 16.258 24h-.133c-2.264 0-4.116-.825-5.605-1.487-.748-.333-1.726-.745-2.468-.759a.563.563 0 01-.552-.562v-10.02c0-.15.06-.294.167-.4 1.857-1.835 2.655-3.777 4.177-5.302.694-.695.947-1.745 1.19-2.76.209-.868.645-2.71 1.591-2.71C15.75 0 18 .375 18 3.818z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.856 10.561a4.353 4.353 0 00-.421-2.952 4.52 4.52 0 00-.813-3.14C20.578 1.848 18.943 0 15.328 0h-1.041C9.43 0 7.922 1.875 6 1.875h-.508A1.494 1.494 0 004.5 1.5h-3A1.5 1.5 0 000 3v11.25a1.5 1.5 0 001.5 1.5h3c.555 0 1.04-.302 1.299-.75h.33c.898.795 2.157 2.843 3.223 3.91.641.64.476 5.09 3.364 5.09 2.7 0 4.466-1.497 4.466-4.91 0-.862-.184-1.58-.415-2.18h1.71c2.278 0 4.023-1.95 4.023-4.012 0-.898-.233-1.64-.644-2.337zM3 13.875a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm15.477.784h-4.874c0 1.773 1.329 2.596 1.329 4.432 0 1.113 0 2.659-2.216 2.659-.886-.886-.443-3.102-1.773-4.432-1.245-1.245-3.102-4.568-4.431-4.568H6V4.023c2.513 0 4.688-1.773 8.046-1.773h1.772c1.665 0 2.851.803 2.49 3.09.713.382 1.243 1.708.654 2.698 1.012.956.876 2.394.244 3.076.443 0 1.048.886 1.044 1.772-.004.887-.783 1.773-1.773 1.773z" />
              </svg>
            </button>
          </div>
          <button class="btn btn--transparent btn--circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M2.469 6.969a.75.75 0 011.062 0L12 15.439l8.469-8.47a.75.75 0 111.062 1.062l-9 9a.75.75 0 01-1.062 0l-9-9a.75.75 0 010-1.062z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <p class="card__title text">
          <span class="text--bold">S1:E1</span>"First, the Weather Changed"
        </p>
        <div class="card__progress flex justify-between items-center">
          <div class="progressbar">
            <div class="progressbar__status"></div>
          </div>
          <span class="text text--bold text--muted">51 of 52m</span>
        </div>
      </div>
    </div>
  </div>
  <div class="wrapper">
    <div class="card card--rounded wrapper__front">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABT_lEnatzXKsxSEf2s-75ETOuxUQ-nB21Yf1Vgj57kXmzGmYboiWLnn82WgbO6o6jYb9My4Ym8e_t_NXg6EtJ7sdzpwNaAF5h7koj8EW2Xy3R0WEd3SmvUXq8rKoimAuqLrR.jpg?r=e30" alt="money heist series banner" />
      </div>
    </div>
    <div class="card card--rounded wrapper__back">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABT_lEnatzXKsxSEf2s-75ETOuxUQ-nB21Yf1Vgj57kXmzGmYboiWLnn82WgbO6o6jYb9My4Ym8e_t_NXg6EtJ7sdzpwNaAF5h7koj8EW2Xy3R0WEd3SmvUXq8rKoimAuqLrR.jpg?r=e30" alt="money heist series banner" />
      </div>
      <div class="card__body">
        <div class="flex justify-between items-center">
          <div>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M21.44 10.72L5.96 2.98A1.38 1.38 0 004 4.213v15.474a1.373 1.373 0 002 1.233l15.44-7.74a1.38 1.38 0 000-2.467v.007z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M12 0a1.5 1.5 0 011.5 1.5v9h9a1.5 1.5 0 110 3h-9v9a1.5 1.5 0 11-3 0v-9h-9a1.5 1.5 0 110-3h9v-9A1.5 1.5 0 0112 0z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.875 10.5h-3.75C.504 10.5 0 11.004 0 11.625v11.25C0 23.496.504 24 1.125 24h3.75C5.496 24 6 23.496 6 22.875v-11.25c0-.621-.504-1.125-1.125-1.125zM3 22.125a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zM18 3.818c0 1.988-1.217 3.104-1.56 4.432h4.768c1.566 0 2.785 1.3 2.792 2.723.004.841-.354 1.746-.911 2.306l-.005.006c.46 1.094.386 2.626-.437 3.725.407 1.213-.003 2.705-.768 3.504.202.825.106 1.527-.288 2.092C20.634 23.981 18.263 24 16.258 24h-.133c-2.264 0-4.116-.825-5.605-1.487-.748-.333-1.726-.745-2.468-.759a.563.563 0 01-.552-.562v-10.02c0-.15.06-.294.167-.4 1.857-1.835 2.655-3.777 4.177-5.302.694-.695.947-1.745 1.19-2.76.209-.868.645-2.71 1.591-2.71C15.75 0 18 .375 18 3.818z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.856 10.561a4.353 4.353 0 00-.421-2.952 4.52 4.52 0 00-.813-3.14C20.578 1.848 18.943 0 15.328 0h-1.041C9.43 0 7.922 1.875 6 1.875h-.508A1.494 1.494 0 004.5 1.5h-3A1.5 1.5 0 000 3v11.25a1.5 1.5 0 001.5 1.5h3c.555 0 1.04-.302 1.299-.75h.33c.898.795 2.157 2.843 3.223 3.91.641.64.476 5.09 3.364 5.09 2.7 0 4.466-1.497 4.466-4.91 0-.862-.184-1.58-.415-2.18h1.71c2.278 0 4.023-1.95 4.023-4.012 0-.898-.233-1.64-.644-2.337zM3 13.875a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm15.477.784h-4.874c0 1.773 1.329 2.596 1.329 4.432 0 1.113 0 2.659-2.216 2.659-.886-.886-.443-3.102-1.773-4.432-1.245-1.245-3.102-4.568-4.431-4.568H6V4.023c2.513 0 4.688-1.773 8.046-1.773h1.772c1.665 0 2.851.803 2.49 3.09.713.382 1.243 1.708.654 2.698 1.012.956.876 2.394.244 3.076.443 0 1.048.886 1.044 1.772-.004.887-.783 1.773-1.773 1.773z" />
              </svg>
            </button>
          </div>
          <button class="btn btn--transparent btn--circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M2.469 6.969a.75.75 0 011.062 0L12 15.439l8.469-8.47a.75.75 0 111.062 1.062l-9 9a.75.75 0 01-1.062 0l-9-9a.75.75 0 010-1.062z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <p class="card__title text">
          <span class="text--bold">P1:E1</span>"Episode 1"
        </p>
        <div class="card__progress flex justify-between items-center">
          <div class="progressbar">
            <div class="progressbar__status"></div>
          </div>
          <span class="text text--bold text--muted">46 of 48m</span>
        </div>
      </div>
    </div>
  </div>
  <div class="wrapper">
    <div class="card card--rounded wrapper__front">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABezM9D-HHC7p--n7tZxsrWQQfk0IRsZTWTLJFgJIHsqDYEtiJTueW9IMEP9SA0LS-9Kwgh20J1lL36BC1jWH1QM5CfCMBwwXbCMWzWBpNDeATz6RMjc1nHuGaoIcqlFcsM8q.jpg?r=dbe" alt="money heist series banner" />
      </div>
    </div>
    <div class="card card--rounded wrapper__back">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABezM9D-HHC7p--n7tZxsrWQQfk0IRsZTWTLJFgJIHsqDYEtiJTueW9IMEP9SA0LS-9Kwgh20J1lL36BC1jWH1QM5CfCMBwwXbCMWzWBpNDeATz6RMjc1nHuGaoIcqlFcsM8q.jpg?r=dbe" alt="money heist series banner" />
      </div>
      <div class="card__body">
        <div class="flex justify-between items-center">
          <div>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M21.44 10.72L5.96 2.98A1.38 1.38 0 004 4.213v15.474a1.373 1.373 0 002 1.233l15.44-7.74a1.38 1.38 0 000-2.467v.007z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M12 0a1.5 1.5 0 011.5 1.5v9h9a1.5 1.5 0 110 3h-9v9a1.5 1.5 0 11-3 0v-9h-9a1.5 1.5 0 110-3h9v-9A1.5 1.5 0 0112 0z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.875 10.5h-3.75C.504 10.5 0 11.004 0 11.625v11.25C0 23.496.504 24 1.125 24h3.75C5.496 24 6 23.496 6 22.875v-11.25c0-.621-.504-1.125-1.125-1.125zM3 22.125a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zM18 3.818c0 1.988-1.217 3.104-1.56 4.432h4.768c1.566 0 2.785 1.3 2.792 2.723.004.841-.354 1.746-.911 2.306l-.005.006c.46 1.094.386 2.626-.437 3.725.407 1.213-.003 2.705-.768 3.504.202.825.106 1.527-.288 2.092C20.634 23.981 18.263 24 16.258 24h-.133c-2.264 0-4.116-.825-5.605-1.487-.748-.333-1.726-.745-2.468-.759a.563.563 0 01-.552-.562v-10.02c0-.15.06-.294.167-.4 1.857-1.835 2.655-3.777 4.177-5.302.694-.695.947-1.745 1.19-2.76.209-.868.645-2.71 1.591-2.71C15.75 0 18 .375 18 3.818z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.856 10.561a4.353 4.353 0 00-.421-2.952 4.52 4.52 0 00-.813-3.14C20.578 1.848 18.943 0 15.328 0h-1.041C9.43 0 7.922 1.875 6 1.875h-.508A1.494 1.494 0 004.5 1.5h-3A1.5 1.5 0 000 3v11.25a1.5 1.5 0 001.5 1.5h3c.555 0 1.04-.302 1.299-.75h.33c.898.795 2.157 2.843 3.223 3.91.641.64.476 5.09 3.364 5.09 2.7 0 4.466-1.497 4.466-4.91 0-.862-.184-1.58-.415-2.18h1.71c2.278 0 4.023-1.95 4.023-4.012 0-.898-.233-1.64-.644-2.337zM3 13.875a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm15.477.784h-4.874c0 1.773 1.329 2.596 1.329 4.432 0 1.113 0 2.659-2.216 2.659-.886-.886-.443-3.102-1.773-4.432-1.245-1.245-3.102-4.568-4.431-4.568H6V4.023c2.513 0 4.688-1.773 8.046-1.773h1.772c1.665 0 2.851.803 2.49 3.09.713.382 1.243 1.708.654 2.698 1.012.956.876 2.394.244 3.076.443 0 1.048.886 1.044 1.772-.004.887-.783 1.773-1.773 1.773z" />
              </svg>
            </button>
          </div>
          <button class="btn btn--transparent btn--circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M2.469 6.969a.75.75 0 011.062 0L12 15.439l8.469-8.47a.75.75 0 111.062 1.062l-9 9a.75.75 0 01-1.062 0l-9-9a.75.75 0 010-1.062z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <p class="card__title text">
          <span class="text--bold">P1:E1</span>"Episode 1"
        </p>
        <div class="card__progress flex justify-between items-center">
          <div class="progressbar">
            <div class="progressbar__status"></div>
          </div>
          <span class="text text--bold text--muted">46 of 48m</span>
        </div>
      </div>
    </div>
  </div>
  <div class="wrapper">
    <div class="card card--rounded wrapper__front">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeWVUnLavhCav6NuSMWZFQzNqAYPNt3Pf1kzZ3L_gsCTz8PCUAUtFCg556QZHoLQ2oXWlNjSrcnNbKDAJB2hEk7zhQROs69AG4SknEcMQlF8RPFaRYXAU6hXiQVU-3jt7A5Y.jpg?r=b2c" alt="queens gambit series banner" />
      </div>
    </div>
    <div class="card card--rounded wrapper__back">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeWVUnLavhCav6NuSMWZFQzNqAYPNt3Pf1kzZ3L_gsCTz8PCUAUtFCg556QZHoLQ2oXWlNjSrcnNbKDAJB2hEk7zhQROs69AG4SknEcMQlF8RPFaRYXAU6hXiQVU-3jt7A5Y.jpg?r=b2c" alt="queens gambit series banner" />
      </div>
      <div class="card__body">
        <div class="flex justify-between items-center">
          <div>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M21.44 10.72L5.96 2.98A1.38 1.38 0 004 4.213v15.474a1.373 1.373 0 002 1.233l15.44-7.74a1.38 1.38 0 000-2.467v.007z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M12 0a1.5 1.5 0 011.5 1.5v9h9a1.5 1.5 0 110 3h-9v9a1.5 1.5 0 11-3 0v-9h-9a1.5 1.5 0 110-3h9v-9A1.5 1.5 0 0112 0z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.875 10.5h-3.75C.504 10.5 0 11.004 0 11.625v11.25C0 23.496.504 24 1.125 24h3.75C5.496 24 6 23.496 6 22.875v-11.25c0-.621-.504-1.125-1.125-1.125zM3 22.125a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zM18 3.818c0 1.988-1.217 3.104-1.56 4.432h4.768c1.566 0 2.785 1.3 2.792 2.723.004.841-.354 1.746-.911 2.306l-.005.006c.46 1.094.386 2.626-.437 3.725.407 1.213-.003 2.705-.768 3.504.202.825.106 1.527-.288 2.092C20.634 23.981 18.263 24 16.258 24h-.133c-2.264 0-4.116-.825-5.605-1.487-.748-.333-1.726-.745-2.468-.759a.563.563 0 01-.552-.562v-10.02c0-.15.06-.294.167-.4 1.857-1.835 2.655-3.777 4.177-5.302.694-.695.947-1.745 1.19-2.76.209-.868.645-2.71 1.591-2.71C15.75 0 18 .375 18 3.818z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.856 10.561a4.353 4.353 0 00-.421-2.952 4.52 4.52 0 00-.813-3.14C20.578 1.848 18.943 0 15.328 0h-1.041C9.43 0 7.922 1.875 6 1.875h-.508A1.494 1.494 0 004.5 1.5h-3A1.5 1.5 0 000 3v11.25a1.5 1.5 0 001.5 1.5h3c.555 0 1.04-.302 1.299-.75h.33c.898.795 2.157 2.843 3.223 3.91.641.64.476 5.09 3.364 5.09 2.7 0 4.466-1.497 4.466-4.91 0-.862-.184-1.58-.415-2.18h1.71c2.278 0 4.023-1.95 4.023-4.012 0-.898-.233-1.64-.644-2.337zM3 13.875a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm15.477.784h-4.874c0 1.773 1.329 2.596 1.329 4.432 0 1.113 0 2.659-2.216 2.659-.886-.886-.443-3.102-1.773-4.432-1.245-1.245-3.102-4.568-4.431-4.568H6V4.023c2.513 0 4.688-1.773 8.046-1.773h1.772c1.665 0 2.851.803 2.49 3.09.713.382 1.243 1.708.654 2.698 1.012.956.876 2.394.244 3.076.443 0 1.048.886 1.044 1.772-.004.887-.783 1.773-1.773 1.773z" />
              </svg>
            </button>
          </div>
          <button class="btn btn--transparent btn--circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M2.469 6.969a.75.75 0 011.062 0L12 15.439l8.469-8.47a.75.75 0 111.062 1.062l-9 9a.75.75 0 01-1.062 0l-9-9a.75.75 0 010-1.062z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <p class="card__title text">
          <span class="text--bold">S1:E2</span>Exchanges
        </p>
        <div class="card__progress flex justify-between items-center">
          <div class="progressbar">
            <div class="progressbar__status"></div>
          </div>
          <span class="text text--bold text--muted">60 of 65m</span>
        </div>
      </div>
    </div>
  </div>
  <div class="wrapper">
    <div class="card card--rounded wrapper__front">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABflM5rQD3OMkR3IdVVT-HwerFPuYIDyoWVJg4usBgFkxhQpSS22W86C2jLE3yCIcYiYquRX2hU6zAq2H-jKtWJhVUbo9QvXMp_BZ7w7pFdk-2b-YQXLJOWARDpXxbaekkzUm.jpg?r=39b" alt="south park series banner" />
      </div>
    </div>
    <div class="card card--rounded wrapper__back">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABflM5rQD3OMkR3IdVVT-HwerFPuYIDyoWVJg4usBgFkxhQpSS22W86C2jLE3yCIcYiYquRX2hU6zAq2H-jKtWJhVUbo9QvXMp_BZ7w7pFdk-2b-YQXLJOWARDpXxbaekkzUm.jpg?r=39b" alt="south park series banner" />
      </div>
      <div class="card__body">
        <div class="flex justify-between items-center">
          <div>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M21.44 10.72L5.96 2.98A1.38 1.38 0 004 4.213v15.474a1.373 1.373 0 002 1.233l15.44-7.74a1.38 1.38 0 000-2.467v.007z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M12 0a1.5 1.5 0 011.5 1.5v9h9a1.5 1.5 0 110 3h-9v9a1.5 1.5 0 11-3 0v-9h-9a1.5 1.5 0 110-3h9v-9A1.5 1.5 0 0112 0z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.875 10.5h-3.75C.504 10.5 0 11.004 0 11.625v11.25C0 23.496.504 24 1.125 24h3.75C5.496 24 6 23.496 6 22.875v-11.25c0-.621-.504-1.125-1.125-1.125zM3 22.125a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zM18 3.818c0 1.988-1.217 3.104-1.56 4.432h4.768c1.566 0 2.785 1.3 2.792 2.723.004.841-.354 1.746-.911 2.306l-.005.006c.46 1.094.386 2.626-.437 3.725.407 1.213-.003 2.705-.768 3.504.202.825.106 1.527-.288 2.092C20.634 23.981 18.263 24 16.258 24h-.133c-2.264 0-4.116-.825-5.605-1.487-.748-.333-1.726-.745-2.468-.759a.563.563 0 01-.552-.562v-10.02c0-.15.06-.294.167-.4 1.857-1.835 2.655-3.777 4.177-5.302.694-.695.947-1.745 1.19-2.76.209-.868.645-2.71 1.591-2.71C15.75 0 18 .375 18 3.818z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.856 10.561a4.353 4.353 0 00-.421-2.952 4.52 4.52 0 00-.813-3.14C20.578 1.848 18.943 0 15.328 0h-1.041C9.43 0 7.922 1.875 6 1.875h-.508A1.494 1.494 0 004.5 1.5h-3A1.5 1.5 0 000 3v11.25a1.5 1.5 0 001.5 1.5h3c.555 0 1.04-.302 1.299-.75h.33c.898.795 2.157 2.843 3.223 3.91.641.64.476 5.09 3.364 5.09 2.7 0 4.466-1.497 4.466-4.91 0-.862-.184-1.58-.415-2.18h1.71c2.278 0 4.023-1.95 4.023-4.012 0-.898-.233-1.64-.644-2.337zM3 13.875a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm15.477.784h-4.874c0 1.773 1.329 2.596 1.329 4.432 0 1.113 0 2.659-2.216 2.659-.886-.886-.443-3.102-1.773-4.432-1.245-1.245-3.102-4.568-4.431-4.568H6V4.023c2.513 0 4.688-1.773 8.046-1.773h1.772c1.665 0 2.851.803 2.49 3.09.713.382 1.243 1.708.654 2.698 1.012.956.876 2.394.244 3.076.443 0 1.048.886 1.044 1.772-.004.887-.783 1.773-1.773 1.773z" />
              </svg>
            </button>
          </div>
          <button class="btn btn--transparent btn--circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M2.469 6.969a.75.75 0 011.062 0L12 15.439l8.469-8.47a.75.75 0 111.062 1.062l-9 9a.75.75 0 01-1.062 0l-9-9a.75.75 0 010-1.062z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <p class="card__title text">
          <span class="text--bold">S17:E1</span>Let Go, Let Gov
        </p>
        <div class="card__progress flex justify-between items-center">
          <div class="progressbar">
            <div class="progressbar__status"></div>
          </div>
          <span class="text text--bold text--muted">21 of 22m</span>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<div className='micontent'>
<h1>Popular Now on Netflix</h1>
<div class="cards">
  <div class="wrapper">
    <div class="card card--rounded wrapper__front">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcDl0dBsxNJZbedEKOxVO4dLuP41A5x2jkW6ZzelaEhJIPoqxzUD4Ah2bEYNSxukswZfDG6TIooHj3Lm26sWqvPCEwyAiiUF5nZYbZaJwyV7KN2Y3-Tafj2kAxgaQ2J2XaIV.jpg?r=4e7" alt="snowpiercer series banner" />
      </div>
    </div>
    <div class="card card--rounded wrapper__back">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcDl0dBsxNJZbedEKOxVO4dLuP41A5x2jkW6ZzelaEhJIPoqxzUD4Ah2bEYNSxukswZfDG6TIooHj3Lm26sWqvPCEwyAiiUF5nZYbZaJwyV7KN2Y3-Tafj2kAxgaQ2J2XaIV.jpg?r=4e7" alt="snowpiercer series banner" />
      </div>
      <div class="card__body">
        <div class="flex justify-between items-center">
          <div>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M21.44 10.72L5.96 2.98A1.38 1.38 0 004 4.213v15.474a1.373 1.373 0 002 1.233l15.44-7.74a1.38 1.38 0 000-2.467v.007z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M12 0a1.5 1.5 0 011.5 1.5v9h9a1.5 1.5 0 110 3h-9v9a1.5 1.5 0 11-3 0v-9h-9a1.5 1.5 0 110-3h9v-9A1.5 1.5 0 0112 0z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.875 10.5h-3.75C.504 10.5 0 11.004 0 11.625v11.25C0 23.496.504 24 1.125 24h3.75C5.496 24 6 23.496 6 22.875v-11.25c0-.621-.504-1.125-1.125-1.125zM3 22.125a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zM18 3.818c0 1.988-1.217 3.104-1.56 4.432h4.768c1.566 0 2.785 1.3 2.792 2.723.004.841-.354 1.746-.911 2.306l-.005.006c.46 1.094.386 2.626-.437 3.725.407 1.213-.003 2.705-.768 3.504.202.825.106 1.527-.288 2.092C20.634 23.981 18.263 24 16.258 24h-.133c-2.264 0-4.116-.825-5.605-1.487-.748-.333-1.726-.745-2.468-.759a.563.563 0 01-.552-.562v-10.02c0-.15.06-.294.167-.4 1.857-1.835 2.655-3.777 4.177-5.302.694-.695.947-1.745 1.19-2.76.209-.868.645-2.71 1.591-2.71C15.75 0 18 .375 18 3.818z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.856 10.561a4.353 4.353 0 00-.421-2.952 4.52 4.52 0 00-.813-3.14C20.578 1.848 18.943 0 15.328 0h-1.041C9.43 0 7.922 1.875 6 1.875h-.508A1.494 1.494 0 004.5 1.5h-3A1.5 1.5 0 000 3v11.25a1.5 1.5 0 001.5 1.5h3c.555 0 1.04-.302 1.299-.75h.33c.898.795 2.157 2.843 3.223 3.91.641.64.476 5.09 3.364 5.09 2.7 0 4.466-1.497 4.466-4.91 0-.862-.184-1.58-.415-2.18h1.71c2.278 0 4.023-1.95 4.023-4.012 0-.898-.233-1.64-.644-2.337zM3 13.875a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm15.477.784h-4.874c0 1.773 1.329 2.596 1.329 4.432 0 1.113 0 2.659-2.216 2.659-.886-.886-.443-3.102-1.773-4.432-1.245-1.245-3.102-4.568-4.431-4.568H6V4.023c2.513 0 4.688-1.773 8.046-1.773h1.772c1.665 0 2.851.803 2.49 3.09.713.382 1.243 1.708.654 2.698 1.012.956.876 2.394.244 3.076.443 0 1.048.886 1.044 1.772-.004.887-.783 1.773-1.773 1.773z" />
              </svg>
            </button>
          </div>
          <button class="btn btn--transparent btn--circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M2.469 6.969a.75.75 0 011.062 0L12 15.439l8.469-8.47a.75.75 0 111.062 1.062l-9 9a.75.75 0 01-1.062 0l-9-9a.75.75 0 010-1.062z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <p class="card__title text">
          <span class="text--bold">S1:E1</span>"First, the Weather Changed"
        </p>
        <div class="card__progress flex justify-between items-center">
          <div class="progressbar">
            <div class="progressbar__status"></div>
          </div>
          <span class="text text--bold text--muted">51 of 52m</span>
        </div>
      </div>
    </div>
  </div>
  <div class="wrapper">
    <div class="card card--rounded wrapper__front">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXR6S0Y93tPTNe7F6Bi3X3EYmbahLaNNw-9PO_E_7771WPQ1kAddehYhNn7FcQorUt9xg_xIhPfvivqOpTS7Oa4cPPYSNe9MHUopNTfUJhajFG6MH2usPLBu2BUb0Z0eontc.jpg?r=ea6" alt="money heist series banner" />
      </div>
    </div>
    <div class="card card--rounded wrapper__back">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXR6S0Y93tPTNe7F6Bi3X3EYmbahLaNNw-9PO_E_7771WPQ1kAddehYhNn7FcQorUt9xg_xIhPfvivqOpTS7Oa4cPPYSNe9MHUopNTfUJhajFG6MH2usPLBu2BUb0Z0eontc.jpg?r=ea6" alt="money heist series banner" />
      </div>
      <div class="card__body">
        <div class="flex justify-between items-center">
          <div>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M21.44 10.72L5.96 2.98A1.38 1.38 0 004 4.213v15.474a1.373 1.373 0 002 1.233l15.44-7.74a1.38 1.38 0 000-2.467v.007z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M12 0a1.5 1.5 0 011.5 1.5v9h9a1.5 1.5 0 110 3h-9v9a1.5 1.5 0 11-3 0v-9h-9a1.5 1.5 0 110-3h9v-9A1.5 1.5 0 0112 0z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.875 10.5h-3.75C.504 10.5 0 11.004 0 11.625v11.25C0 23.496.504 24 1.125 24h3.75C5.496 24 6 23.496 6 22.875v-11.25c0-.621-.504-1.125-1.125-1.125zM3 22.125a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zM18 3.818c0 1.988-1.217 3.104-1.56 4.432h4.768c1.566 0 2.785 1.3 2.792 2.723.004.841-.354 1.746-.911 2.306l-.005.006c.46 1.094.386 2.626-.437 3.725.407 1.213-.003 2.705-.768 3.504.202.825.106 1.527-.288 2.092C20.634 23.981 18.263 24 16.258 24h-.133c-2.264 0-4.116-.825-5.605-1.487-.748-.333-1.726-.745-2.468-.759a.563.563 0 01-.552-.562v-10.02c0-.15.06-.294.167-.4 1.857-1.835 2.655-3.777 4.177-5.302.694-.695.947-1.745 1.19-2.76.209-.868.645-2.71 1.591-2.71C15.75 0 18 .375 18 3.818z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.856 10.561a4.353 4.353 0 00-.421-2.952 4.52 4.52 0 00-.813-3.14C20.578 1.848 18.943 0 15.328 0h-1.041C9.43 0 7.922 1.875 6 1.875h-.508A1.494 1.494 0 004.5 1.5h-3A1.5 1.5 0 000 3v11.25a1.5 1.5 0 001.5 1.5h3c.555 0 1.04-.302 1.299-.75h.33c.898.795 2.157 2.843 3.223 3.91.641.64.476 5.09 3.364 5.09 2.7 0 4.466-1.497 4.466-4.91 0-.862-.184-1.58-.415-2.18h1.71c2.278 0 4.023-1.95 4.023-4.012 0-.898-.233-1.64-.644-2.337zM3 13.875a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm15.477.784h-4.874c0 1.773 1.329 2.596 1.329 4.432 0 1.113 0 2.659-2.216 2.659-.886-.886-.443-3.102-1.773-4.432-1.245-1.245-3.102-4.568-4.431-4.568H6V4.023c2.513 0 4.688-1.773 8.046-1.773h1.772c1.665 0 2.851.803 2.49 3.09.713.382 1.243 1.708.654 2.698 1.012.956.876 2.394.244 3.076.443 0 1.048.886 1.044 1.772-.004.887-.783 1.773-1.773 1.773z" />
              </svg>
            </button>
          </div>
          <button class="btn btn--transparent btn--circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M2.469 6.969a.75.75 0 011.062 0L12 15.439l8.469-8.47a.75.75 0 111.062 1.062l-9 9a.75.75 0 01-1.062 0l-9-9a.75.75 0 010-1.062z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <p class="card__title text">
          <span class="text--bold">P1:E1</span>"Episode 1"
        </p>
        <div class="card__progress flex justify-between items-center">
          <div class="progressbar">
            <div class="progressbar__status"></div>
          </div>
          <span class="text text--bold text--muted">46 of 48m</span>
        </div>
      </div>
    </div>
  </div>
  <div class="wrapper">
    <div class="card card--rounded wrapper__front">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSUoMbP6KdheiBfIQoIKhpmilVtipFt0qISegNq6W5k--h5Thtf7z6r__e7zUq7oyrrgf1cNNSRXOyCAYlb6zgLei8Q5V-SkNVoNtqwwuAd345oBKKoSmb3Ytehbh0-qwNAG.jpg?r=832" alt="money heist series banner" />
      </div>
    </div>
    <div class="card card--rounded wrapper__back">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSUoMbP6KdheiBfIQoIKhpmilVtipFt0qISegNq6W5k--h5Thtf7z6r__e7zUq7oyrrgf1cNNSRXOyCAYlb6zgLei8Q5V-SkNVoNtqwwuAd345oBKKoSmb3Ytehbh0-qwNAG.jpg?r=832" alt="money heist series banner" />
      </div>
      <div class="card__body">
        <div class="flex justify-between items-center">
          <div>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M21.44 10.72L5.96 2.98A1.38 1.38 0 004 4.213v15.474a1.373 1.373 0 002 1.233l15.44-7.74a1.38 1.38 0 000-2.467v.007z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M12 0a1.5 1.5 0 011.5 1.5v9h9a1.5 1.5 0 110 3h-9v9a1.5 1.5 0 11-3 0v-9h-9a1.5 1.5 0 110-3h9v-9A1.5 1.5 0 0112 0z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.875 10.5h-3.75C.504 10.5 0 11.004 0 11.625v11.25C0 23.496.504 24 1.125 24h3.75C5.496 24 6 23.496 6 22.875v-11.25c0-.621-.504-1.125-1.125-1.125zM3 22.125a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zM18 3.818c0 1.988-1.217 3.104-1.56 4.432h4.768c1.566 0 2.785 1.3 2.792 2.723.004.841-.354 1.746-.911 2.306l-.005.006c.46 1.094.386 2.626-.437 3.725.407 1.213-.003 2.705-.768 3.504.202.825.106 1.527-.288 2.092C20.634 23.981 18.263 24 16.258 24h-.133c-2.264 0-4.116-.825-5.605-1.487-.748-.333-1.726-.745-2.468-.759a.563.563 0 01-.552-.562v-10.02c0-.15.06-.294.167-.4 1.857-1.835 2.655-3.777 4.177-5.302.694-.695.947-1.745 1.19-2.76.209-.868.645-2.71 1.591-2.71C15.75 0 18 .375 18 3.818z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.856 10.561a4.353 4.353 0 00-.421-2.952 4.52 4.52 0 00-.813-3.14C20.578 1.848 18.943 0 15.328 0h-1.041C9.43 0 7.922 1.875 6 1.875h-.508A1.494 1.494 0 004.5 1.5h-3A1.5 1.5 0 000 3v11.25a1.5 1.5 0 001.5 1.5h3c.555 0 1.04-.302 1.299-.75h.33c.898.795 2.157 2.843 3.223 3.91.641.64.476 5.09 3.364 5.09 2.7 0 4.466-1.497 4.466-4.91 0-.862-.184-1.58-.415-2.18h1.71c2.278 0 4.023-1.95 4.023-4.012 0-.898-.233-1.64-.644-2.337zM3 13.875a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm15.477.784h-4.874c0 1.773 1.329 2.596 1.329 4.432 0 1.113 0 2.659-2.216 2.659-.886-.886-.443-3.102-1.773-4.432-1.245-1.245-3.102-4.568-4.431-4.568H6V4.023c2.513 0 4.688-1.773 8.046-1.773h1.772c1.665 0 2.851.803 2.49 3.09.713.382 1.243 1.708.654 2.698 1.012.956.876 2.394.244 3.076.443 0 1.048.886 1.044 1.772-.004.887-.783 1.773-1.773 1.773z" />
              </svg>
            </button>
          </div>
          <button class="btn btn--transparent btn--circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M2.469 6.969a.75.75 0 011.062 0L12 15.439l8.469-8.47a.75.75 0 111.062 1.062l-9 9a.75.75 0 01-1.062 0l-9-9a.75.75 0 010-1.062z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <p class="card__title text">
          <span class="text--bold">P1:E1</span>"Episode 1"
        </p>
        <div class="card__progress flex justify-between items-center">
          <div class="progressbar">
            <div class="progressbar__status"></div>
          </div>
          <span class="text text--bold text--muted">46 of 48m</span>
        </div>
      </div>
    </div>
  </div>
  <div class="wrapper">
    <div class="card card--rounded wrapper__front">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeka0IMbVR2rQTDp1WPhtscktLClgUFbhk_JcWsT6-AO4c8z1h7FtzF0idII2mB3G4Bb3GhGNwnO-OxgPLTFODZRGRXvuzwW-xasYQiLd9vaEc2pWUKBKiPbdpFOHPuwFm3g.jpg?r=257" alt="queens gambit series banner" />
      </div>
    </div>
    <div class="card card--rounded wrapper__back">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeka0IMbVR2rQTDp1WPhtscktLClgUFbhk_JcWsT6-AO4c8z1h7FtzF0idII2mB3G4Bb3GhGNwnO-OxgPLTFODZRGRXvuzwW-xasYQiLd9vaEc2pWUKBKiPbdpFOHPuwFm3g.jpg?r=257" alt="queens gambit series banner" />
      </div>
      <div class="card__body">
        <div class="flex justify-between items-center">
          <div>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M21.44 10.72L5.96 2.98A1.38 1.38 0 004 4.213v15.474a1.373 1.373 0 002 1.233l15.44-7.74a1.38 1.38 0 000-2.467v.007z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M12 0a1.5 1.5 0 011.5 1.5v9h9a1.5 1.5 0 110 3h-9v9a1.5 1.5 0 11-3 0v-9h-9a1.5 1.5 0 110-3h9v-9A1.5 1.5 0 0112 0z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.875 10.5h-3.75C.504 10.5 0 11.004 0 11.625v11.25C0 23.496.504 24 1.125 24h3.75C5.496 24 6 23.496 6 22.875v-11.25c0-.621-.504-1.125-1.125-1.125zM3 22.125a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zM18 3.818c0 1.988-1.217 3.104-1.56 4.432h4.768c1.566 0 2.785 1.3 2.792 2.723.004.841-.354 1.746-.911 2.306l-.005.006c.46 1.094.386 2.626-.437 3.725.407 1.213-.003 2.705-.768 3.504.202.825.106 1.527-.288 2.092C20.634 23.981 18.263 24 16.258 24h-.133c-2.264 0-4.116-.825-5.605-1.487-.748-.333-1.726-.745-2.468-.759a.563.563 0 01-.552-.562v-10.02c0-.15.06-.294.167-.4 1.857-1.835 2.655-3.777 4.177-5.302.694-.695.947-1.745 1.19-2.76.209-.868.645-2.71 1.591-2.71C15.75 0 18 .375 18 3.818z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.856 10.561a4.353 4.353 0 00-.421-2.952 4.52 4.52 0 00-.813-3.14C20.578 1.848 18.943 0 15.328 0h-1.041C9.43 0 7.922 1.875 6 1.875h-.508A1.494 1.494 0 004.5 1.5h-3A1.5 1.5 0 000 3v11.25a1.5 1.5 0 001.5 1.5h3c.555 0 1.04-.302 1.299-.75h.33c.898.795 2.157 2.843 3.223 3.91.641.64.476 5.09 3.364 5.09 2.7 0 4.466-1.497 4.466-4.91 0-.862-.184-1.58-.415-2.18h1.71c2.278 0 4.023-1.95 4.023-4.012 0-.898-.233-1.64-.644-2.337zM3 13.875a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm15.477.784h-4.874c0 1.773 1.329 2.596 1.329 4.432 0 1.113 0 2.659-2.216 2.659-.886-.886-.443-3.102-1.773-4.432-1.245-1.245-3.102-4.568-4.431-4.568H6V4.023c2.513 0 4.688-1.773 8.046-1.773h1.772c1.665 0 2.851.803 2.49 3.09.713.382 1.243 1.708.654 2.698 1.012.956.876 2.394.244 3.076.443 0 1.048.886 1.044 1.772-.004.887-.783 1.773-1.773 1.773z" />
              </svg>
            </button>
          </div>
          <button class="btn btn--transparent btn--circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M2.469 6.969a.75.75 0 011.062 0L12 15.439l8.469-8.47a.75.75 0 111.062 1.062l-9 9a.75.75 0 01-1.062 0l-9-9a.75.75 0 010-1.062z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <p class="card__title text">
          <span class="text--bold">S1:E2</span>Exchanges
        </p>
        <div class="card__progress flex justify-between items-center">
          <div class="progressbar">
            <div class="progressbar__status"></div>
          </div>
          <span class="text text--bold text--muted">60 of 65m</span>
        </div>
      </div>
    </div>
  </div>
  <div class="wrapper">
    <div class="card card--rounded wrapper__front">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcolR03U2hi2jL5_UBvsQRZrV1lVX6idzfRr-Oe621ZUO_pv64h-Qb0hVTndrnfWddpLQHCBflbW3sfcYpO7Er-C_wUNC8YMc036ETI0pfUqWBJB3eoiWom1x0t_zfDELpNLqWqBk-YzKy55-bEztahpZ2kUyz-vDqZT4iuL1rBUMH9VQbcmetO8yNhOwtUCGnVxd_JrnaZof_G3lLHK5wLHTzz9zPG0XixESP_ULyU3gp27b-Sub6fF9RSWfuAzb7nxldJMvNz9geNZbYpYAML294YudVTmRuCDKGPi7Lux2sBxCQTVJfJTsRLPgztyVoBAWkW8-BUpwUD1lffOIT8iF5tfRK-tj9UrLy4k6u9PHQ.jpg?r=0b4" alt="south park series banner" />
      </div>
    </div>
    <div class="card card--rounded wrapper__back">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcolR03U2hi2jL5_UBvsQRZrV1lVX6idzfRr-Oe621ZUO_pv64h-Qb0hVTndrnfWddpLQHCBflbW3sfcYpO7Er-C_wUNC8YMc036ETI0pfUqWBJB3eoiWom1x0t_zfDELpNLqWqBk-YzKy55-bEztahpZ2kUyz-vDqZT4iuL1rBUMH9VQbcmetO8yNhOwtUCGnVxd_JrnaZof_G3lLHK5wLHTzz9zPG0XixESP_ULyU3gp27b-Sub6fF9RSWfuAzb7nxldJMvNz9geNZbYpYAML294YudVTmRuCDKGPi7Lux2sBxCQTVJfJTsRLPgztyVoBAWkW8-BUpwUD1lffOIT8iF5tfRK-tj9UrLy4k6u9PHQ.jpg?r=0b4" alt="south park series banner" />
      </div>
      <div class="card__body">
        <div class="flex justify-between items-center">
          <div>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M21.44 10.72L5.96 2.98A1.38 1.38 0 004 4.213v15.474a1.373 1.373 0 002 1.233l15.44-7.74a1.38 1.38 0 000-2.467v.007z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M12 0a1.5 1.5 0 011.5 1.5v9h9a1.5 1.5 0 110 3h-9v9a1.5 1.5 0 11-3 0v-9h-9a1.5 1.5 0 110-3h9v-9A1.5 1.5 0 0112 0z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.875 10.5h-3.75C.504 10.5 0 11.004 0 11.625v11.25C0 23.496.504 24 1.125 24h3.75C5.496 24 6 23.496 6 22.875v-11.25c0-.621-.504-1.125-1.125-1.125zM3 22.125a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zM18 3.818c0 1.988-1.217 3.104-1.56 4.432h4.768c1.566 0 2.785 1.3 2.792 2.723.004.841-.354 1.746-.911 2.306l-.005.006c.46 1.094.386 2.626-.437 3.725.407 1.213-.003 2.705-.768 3.504.202.825.106 1.527-.288 2.092C20.634 23.981 18.263 24 16.258 24h-.133c-2.264 0-4.116-.825-5.605-1.487-.748-.333-1.726-.745-2.468-.759a.563.563 0 01-.552-.562v-10.02c0-.15.06-.294.167-.4 1.857-1.835 2.655-3.777 4.177-5.302.694-.695.947-1.745 1.19-2.76.209-.868.645-2.71 1.591-2.71C15.75 0 18 .375 18 3.818z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.856 10.561a4.353 4.353 0 00-.421-2.952 4.52 4.52 0 00-.813-3.14C20.578 1.848 18.943 0 15.328 0h-1.041C9.43 0 7.922 1.875 6 1.875h-.508A1.494 1.494 0 004.5 1.5h-3A1.5 1.5 0 000 3v11.25a1.5 1.5 0 001.5 1.5h3c.555 0 1.04-.302 1.299-.75h.33c.898.795 2.157 2.843 3.223 3.91.641.64.476 5.09 3.364 5.09 2.7 0 4.466-1.497 4.466-4.91 0-.862-.184-1.58-.415-2.18h1.71c2.278 0 4.023-1.95 4.023-4.012 0-.898-.233-1.64-.644-2.337zM3 13.875a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm15.477.784h-4.874c0 1.773 1.329 2.596 1.329 4.432 0 1.113 0 2.659-2.216 2.659-.886-.886-.443-3.102-1.773-4.432-1.245-1.245-3.102-4.568-4.431-4.568H6V4.023c2.513 0 4.688-1.773 8.046-1.773h1.772c1.665 0 2.851.803 2.49 3.09.713.382 1.243 1.708.654 2.698 1.012.956.876 2.394.244 3.076.443 0 1.048.886 1.044 1.772-.004.887-.783 1.773-1.773 1.773z" />
              </svg>
            </button>
          </div>
          <button class="btn btn--transparent btn--circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M2.469 6.969a.75.75 0 011.062 0L12 15.439l8.469-8.47a.75.75 0 111.062 1.062l-9 9a.75.75 0 01-1.062 0l-9-9a.75.75 0 010-1.062z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <p class="card__title text">
          <span class="text--bold">S17:E1</span>Let Go, Let Gov
        </p>
        <div class="card__progress flex justify-between items-center">
          <div class="progressbar">
            <div class="progressbar__status"></div>
          </div>
          <span class="text text--bold text--muted">21 of 22m</span>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<div className='micontent'>
<h1>Bingeworthy TV Shows</h1>
<div class="cards">
  <div class="wrapper">
    <div class="card card--rounded wrapper__front">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZOLYlloxTHEXZcNvrkwe5yfLe802mjKpv4LGEsxORWkfGBdVZA5Z7BpmgU_xb_Vl4X6-xrZt3GF7ewWEprtuAFHx3DyHYB50r8yyuACdkJBhjIYYn20yNO2vzKHNw4Xqul9.jpg?r=c42" alt="snowpiercer series banner" />
      </div>
    </div>
    <div class="card card--rounded wrapper__back">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZOLYlloxTHEXZcNvrkwe5yfLe802mjKpv4LGEsxORWkfGBdVZA5Z7BpmgU_xb_Vl4X6-xrZt3GF7ewWEprtuAFHx3DyHYB50r8yyuACdkJBhjIYYn20yNO2vzKHNw4Xqul9.jpg?r=c42" alt="snowpiercer series banner" />
      </div>
      <div class="card__body">
        <div class="flex justify-between items-center">
          <div>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M21.44 10.72L5.96 2.98A1.38 1.38 0 004 4.213v15.474a1.373 1.373 0 002 1.233l15.44-7.74a1.38 1.38 0 000-2.467v.007z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M12 0a1.5 1.5 0 011.5 1.5v9h9a1.5 1.5 0 110 3h-9v9a1.5 1.5 0 11-3 0v-9h-9a1.5 1.5 0 110-3h9v-9A1.5 1.5 0 0112 0z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.875 10.5h-3.75C.504 10.5 0 11.004 0 11.625v11.25C0 23.496.504 24 1.125 24h3.75C5.496 24 6 23.496 6 22.875v-11.25c0-.621-.504-1.125-1.125-1.125zM3 22.125a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zM18 3.818c0 1.988-1.217 3.104-1.56 4.432h4.768c1.566 0 2.785 1.3 2.792 2.723.004.841-.354 1.746-.911 2.306l-.005.006c.46 1.094.386 2.626-.437 3.725.407 1.213-.003 2.705-.768 3.504.202.825.106 1.527-.288 2.092C20.634 23.981 18.263 24 16.258 24h-.133c-2.264 0-4.116-.825-5.605-1.487-.748-.333-1.726-.745-2.468-.759a.563.563 0 01-.552-.562v-10.02c0-.15.06-.294.167-.4 1.857-1.835 2.655-3.777 4.177-5.302.694-.695.947-1.745 1.19-2.76.209-.868.645-2.71 1.591-2.71C15.75 0 18 .375 18 3.818z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.856 10.561a4.353 4.353 0 00-.421-2.952 4.52 4.52 0 00-.813-3.14C20.578 1.848 18.943 0 15.328 0h-1.041C9.43 0 7.922 1.875 6 1.875h-.508A1.494 1.494 0 004.5 1.5h-3A1.5 1.5 0 000 3v11.25a1.5 1.5 0 001.5 1.5h3c.555 0 1.04-.302 1.299-.75h.33c.898.795 2.157 2.843 3.223 3.91.641.64.476 5.09 3.364 5.09 2.7 0 4.466-1.497 4.466-4.91 0-.862-.184-1.58-.415-2.18h1.71c2.278 0 4.023-1.95 4.023-4.012 0-.898-.233-1.64-.644-2.337zM3 13.875a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm15.477.784h-4.874c0 1.773 1.329 2.596 1.329 4.432 0 1.113 0 2.659-2.216 2.659-.886-.886-.443-3.102-1.773-4.432-1.245-1.245-3.102-4.568-4.431-4.568H6V4.023c2.513 0 4.688-1.773 8.046-1.773h1.772c1.665 0 2.851.803 2.49 3.09.713.382 1.243 1.708.654 2.698 1.012.956.876 2.394.244 3.076.443 0 1.048.886 1.044 1.772-.004.887-.783 1.773-1.773 1.773z" />
              </svg>
            </button>
          </div>
          <button class="btn btn--transparent btn--circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M2.469 6.969a.75.75 0 011.062 0L12 15.439l8.469-8.47a.75.75 0 111.062 1.062l-9 9a.75.75 0 01-1.062 0l-9-9a.75.75 0 010-1.062z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <p class="card__title text">
          <span class="text--bold">S1:E1</span>"First, the Weather Changed"
        </p>
        <div class="card__progress flex justify-between items-center">
          <div class="progressbar">
            <div class="progressbar__status"></div>
          </div>
          <span class="text text--bold text--muted">51 of 52m</span>
        </div>
      </div>
    </div>
  </div>
  <div class="wrapper">
    <div class="card card--rounded wrapper__front">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSuiBso5uUFhf8ggx_gcQubQWzPkKVT2Q6OdJXDx4kzOILHq87sljH8hcCPRtOoAICW_IUL4O4NTUaMiJ39m64CKJOpDjDvw40Rw780wrNa-5AW0_BcgsP--NvwCer-vMcCW.jpg?r=b74" alt="money heist series banner" />
      </div>
    </div>
    <div class="card card--rounded wrapper__back">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSuiBso5uUFhf8ggx_gcQubQWzPkKVT2Q6OdJXDx4kzOILHq87sljH8hcCPRtOoAICW_IUL4O4NTUaMiJ39m64CKJOpDjDvw40Rw780wrNa-5AW0_BcgsP--NvwCer-vMcCW.jpg?r=b74" alt="money heist series banner" />
      </div>
      <div class="card__body">
        <div class="flex justify-between items-center">
          <div>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M21.44 10.72L5.96 2.98A1.38 1.38 0 004 4.213v15.474a1.373 1.373 0 002 1.233l15.44-7.74a1.38 1.38 0 000-2.467v.007z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M12 0a1.5 1.5 0 011.5 1.5v9h9a1.5 1.5 0 110 3h-9v9a1.5 1.5 0 11-3 0v-9h-9a1.5 1.5 0 110-3h9v-9A1.5 1.5 0 0112 0z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.875 10.5h-3.75C.504 10.5 0 11.004 0 11.625v11.25C0 23.496.504 24 1.125 24h3.75C5.496 24 6 23.496 6 22.875v-11.25c0-.621-.504-1.125-1.125-1.125zM3 22.125a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zM18 3.818c0 1.988-1.217 3.104-1.56 4.432h4.768c1.566 0 2.785 1.3 2.792 2.723.004.841-.354 1.746-.911 2.306l-.005.006c.46 1.094.386 2.626-.437 3.725.407 1.213-.003 2.705-.768 3.504.202.825.106 1.527-.288 2.092C20.634 23.981 18.263 24 16.258 24h-.133c-2.264 0-4.116-.825-5.605-1.487-.748-.333-1.726-.745-2.468-.759a.563.563 0 01-.552-.562v-10.02c0-.15.06-.294.167-.4 1.857-1.835 2.655-3.777 4.177-5.302.694-.695.947-1.745 1.19-2.76.209-.868.645-2.71 1.591-2.71C15.75 0 18 .375 18 3.818z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.856 10.561a4.353 4.353 0 00-.421-2.952 4.52 4.52 0 00-.813-3.14C20.578 1.848 18.943 0 15.328 0h-1.041C9.43 0 7.922 1.875 6 1.875h-.508A1.494 1.494 0 004.5 1.5h-3A1.5 1.5 0 000 3v11.25a1.5 1.5 0 001.5 1.5h3c.555 0 1.04-.302 1.299-.75h.33c.898.795 2.157 2.843 3.223 3.91.641.64.476 5.09 3.364 5.09 2.7 0 4.466-1.497 4.466-4.91 0-.862-.184-1.58-.415-2.18h1.71c2.278 0 4.023-1.95 4.023-4.012 0-.898-.233-1.64-.644-2.337zM3 13.875a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm15.477.784h-4.874c0 1.773 1.329 2.596 1.329 4.432 0 1.113 0 2.659-2.216 2.659-.886-.886-.443-3.102-1.773-4.432-1.245-1.245-3.102-4.568-4.431-4.568H6V4.023c2.513 0 4.688-1.773 8.046-1.773h1.772c1.665 0 2.851.803 2.49 3.09.713.382 1.243 1.708.654 2.698 1.012.956.876 2.394.244 3.076.443 0 1.048.886 1.044 1.772-.004.887-.783 1.773-1.773 1.773z" />
              </svg>
            </button>
          </div>
          <button class="btn btn--transparent btn--circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M2.469 6.969a.75.75 0 011.062 0L12 15.439l8.469-8.47a.75.75 0 111.062 1.062l-9 9a.75.75 0 01-1.062 0l-9-9a.75.75 0 010-1.062z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <p class="card__title text">
          <span class="text--bold">P1:E1</span>"Episode 1"
        </p>
        <div class="card__progress flex justify-between items-center">
          <div class="progressbar">
            <div class="progressbar__status"></div>
          </div>
          <span class="text text--bold text--muted">46 of 48m</span>
        </div>
      </div>
    </div>
  </div>
  <div class="wrapper">
    <div class="card card--rounded wrapper__front">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRxDXw80LCh8AnMBmKGLo4UQ_ZsfOYdtMtefihRtollTFpjiWYvDHE9_U6b09QGf6HFedJV2Gu_qaovLacqp0x6LSGK7Ksqz4D5zJYi78kM16ANHt9jyxi3cKoqDtMbbU1Xu.jpg?r=524" alt="money heist series banner" />
      </div>
    </div>
    <div class="card card--rounded wrapper__back">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRxDXw80LCh8AnMBmKGLo4UQ_ZsfOYdtMtefihRtollTFpjiWYvDHE9_U6b09QGf6HFedJV2Gu_qaovLacqp0x6LSGK7Ksqz4D5zJYi78kM16ANHt9jyxi3cKoqDtMbbU1Xu.jpg?r=524" alt="money heist series banner" />
      </div>
      <div class="card__body">
        <div class="flex justify-between items-center">
          <div>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M21.44 10.72L5.96 2.98A1.38 1.38 0 004 4.213v15.474a1.373 1.373 0 002 1.233l15.44-7.74a1.38 1.38 0 000-2.467v.007z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M12 0a1.5 1.5 0 011.5 1.5v9h9a1.5 1.5 0 110 3h-9v9a1.5 1.5 0 11-3 0v-9h-9a1.5 1.5 0 110-3h9v-9A1.5 1.5 0 0112 0z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.875 10.5h-3.75C.504 10.5 0 11.004 0 11.625v11.25C0 23.496.504 24 1.125 24h3.75C5.496 24 6 23.496 6 22.875v-11.25c0-.621-.504-1.125-1.125-1.125zM3 22.125a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zM18 3.818c0 1.988-1.217 3.104-1.56 4.432h4.768c1.566 0 2.785 1.3 2.792 2.723.004.841-.354 1.746-.911 2.306l-.005.006c.46 1.094.386 2.626-.437 3.725.407 1.213-.003 2.705-.768 3.504.202.825.106 1.527-.288 2.092C20.634 23.981 18.263 24 16.258 24h-.133c-2.264 0-4.116-.825-5.605-1.487-.748-.333-1.726-.745-2.468-.759a.563.563 0 01-.552-.562v-10.02c0-.15.06-.294.167-.4 1.857-1.835 2.655-3.777 4.177-5.302.694-.695.947-1.745 1.19-2.76.209-.868.645-2.71 1.591-2.71C15.75 0 18 .375 18 3.818z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.856 10.561a4.353 4.353 0 00-.421-2.952 4.52 4.52 0 00-.813-3.14C20.578 1.848 18.943 0 15.328 0h-1.041C9.43 0 7.922 1.875 6 1.875h-.508A1.494 1.494 0 004.5 1.5h-3A1.5 1.5 0 000 3v11.25a1.5 1.5 0 001.5 1.5h3c.555 0 1.04-.302 1.299-.75h.33c.898.795 2.157 2.843 3.223 3.91.641.64.476 5.09 3.364 5.09 2.7 0 4.466-1.497 4.466-4.91 0-.862-.184-1.58-.415-2.18h1.71c2.278 0 4.023-1.95 4.023-4.012 0-.898-.233-1.64-.644-2.337zM3 13.875a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm15.477.784h-4.874c0 1.773 1.329 2.596 1.329 4.432 0 1.113 0 2.659-2.216 2.659-.886-.886-.443-3.102-1.773-4.432-1.245-1.245-3.102-4.568-4.431-4.568H6V4.023c2.513 0 4.688-1.773 8.046-1.773h1.772c1.665 0 2.851.803 2.49 3.09.713.382 1.243 1.708.654 2.698 1.012.956.876 2.394.244 3.076.443 0 1.048.886 1.044 1.772-.004.887-.783 1.773-1.773 1.773z" />
              </svg>
            </button>
          </div>
          <button class="btn btn--transparent btn--circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M2.469 6.969a.75.75 0 011.062 0L12 15.439l8.469-8.47a.75.75 0 111.062 1.062l-9 9a.75.75 0 01-1.062 0l-9-9a.75.75 0 010-1.062z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <p class="card__title text">
          <span class="text--bold">P1:E1</span>"Episode 1"
        </p>
        <div class="card__progress flex justify-between items-center">
          <div class="progressbar">
            <div class="progressbar__status"></div>
          </div>
          <span class="text text--bold text--muted">46 of 48m</span>
        </div>
      </div>
    </div>
  </div>
  <div class="wrapper">
    <div class="card card--rounded wrapper__front">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRdNtWFr1RCSIFndSkW6bpeqBwTAV7_V8tx_IUqI_aYf89oyatHxcXgljro2lLd9AkAivO33PXXVe9u_qlRCT342WazqiXYnsh3KHWW4nR8Ib9fIwPpanphGX4A_MmM-Ro2M.jpg?r=e0c" alt="queens gambit series banner" />
      </div>
    </div>
    <div class="card card--rounded wrapper__back">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRdNtWFr1RCSIFndSkW6bpeqBwTAV7_V8tx_IUqI_aYf89oyatHxcXgljro2lLd9AkAivO33PXXVe9u_qlRCT342WazqiXYnsh3KHWW4nR8Ib9fIwPpanphGX4A_MmM-Ro2M.jpg?r=e0c" alt="queens gambit series banner" />
      </div>
      <div class="card__body">
        <div class="flex justify-between items-center">
          <div>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M21.44 10.72L5.96 2.98A1.38 1.38 0 004 4.213v15.474a1.373 1.373 0 002 1.233l15.44-7.74a1.38 1.38 0 000-2.467v.007z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M12 0a1.5 1.5 0 011.5 1.5v9h9a1.5 1.5 0 110 3h-9v9a1.5 1.5 0 11-3 0v-9h-9a1.5 1.5 0 110-3h9v-9A1.5 1.5 0 0112 0z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.875 10.5h-3.75C.504 10.5 0 11.004 0 11.625v11.25C0 23.496.504 24 1.125 24h3.75C5.496 24 6 23.496 6 22.875v-11.25c0-.621-.504-1.125-1.125-1.125zM3 22.125a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zM18 3.818c0 1.988-1.217 3.104-1.56 4.432h4.768c1.566 0 2.785 1.3 2.792 2.723.004.841-.354 1.746-.911 2.306l-.005.006c.46 1.094.386 2.626-.437 3.725.407 1.213-.003 2.705-.768 3.504.202.825.106 1.527-.288 2.092C20.634 23.981 18.263 24 16.258 24h-.133c-2.264 0-4.116-.825-5.605-1.487-.748-.333-1.726-.745-2.468-.759a.563.563 0 01-.552-.562v-10.02c0-.15.06-.294.167-.4 1.857-1.835 2.655-3.777 4.177-5.302.694-.695.947-1.745 1.19-2.76.209-.868.645-2.71 1.591-2.71C15.75 0 18 .375 18 3.818z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.856 10.561a4.353 4.353 0 00-.421-2.952 4.52 4.52 0 00-.813-3.14C20.578 1.848 18.943 0 15.328 0h-1.041C9.43 0 7.922 1.875 6 1.875h-.508A1.494 1.494 0 004.5 1.5h-3A1.5 1.5 0 000 3v11.25a1.5 1.5 0 001.5 1.5h3c.555 0 1.04-.302 1.299-.75h.33c.898.795 2.157 2.843 3.223 3.91.641.64.476 5.09 3.364 5.09 2.7 0 4.466-1.497 4.466-4.91 0-.862-.184-1.58-.415-2.18h1.71c2.278 0 4.023-1.95 4.023-4.012 0-.898-.233-1.64-.644-2.337zM3 13.875a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm15.477.784h-4.874c0 1.773 1.329 2.596 1.329 4.432 0 1.113 0 2.659-2.216 2.659-.886-.886-.443-3.102-1.773-4.432-1.245-1.245-3.102-4.568-4.431-4.568H6V4.023c2.513 0 4.688-1.773 8.046-1.773h1.772c1.665 0 2.851.803 2.49 3.09.713.382 1.243 1.708.654 2.698 1.012.956.876 2.394.244 3.076.443 0 1.048.886 1.044 1.772-.004.887-.783 1.773-1.773 1.773z" />
              </svg>
            </button>
          </div>
          <button class="btn btn--transparent btn--circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M2.469 6.969a.75.75 0 011.062 0L12 15.439l8.469-8.47a.75.75 0 111.062 1.062l-9 9a.75.75 0 01-1.062 0l-9-9a.75.75 0 010-1.062z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <p class="card__title text">
          <span class="text--bold">S1:E2</span>Exchanges
        </p>
        <div class="card__progress flex justify-between items-center">
          <div class="progressbar">
            <div class="progressbar__status"></div>
          </div>
          <span class="text text--bold text--muted">60 of 65m</span>
        </div>
      </div>
    </div>
  </div>
  <div class="wrapper">
    <div class="card card--rounded wrapper__front">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTCnJLB4jDAIAJ4NDUGL9A5SB3T5kURBWiWoo01RdanFXxabJt9T-XGL65rhkEBZbGwK0dNuGTr_5F8D9t_9II7wD-EjSRHzqB9Jq9NLeyJn9g3WpK2xKpVOSaD1LAobALju.jpg?r=4f8" alt="south park series banner" />
      </div>
    </div>
    <div class="card card--rounded wrapper__back">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTCnJLB4jDAIAJ4NDUGL9A5SB3T5kURBWiWoo01RdanFXxabJt9T-XGL65rhkEBZbGwK0dNuGTr_5F8D9t_9II7wD-EjSRHzqB9Jq9NLeyJn9g3WpK2xKpVOSaD1LAobALju.jpg?r=4f8" alt="south park series banner" />
      </div>
      <div class="card__body">
        <div class="flex justify-between items-center">
          <div>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M21.44 10.72L5.96 2.98A1.38 1.38 0 004 4.213v15.474a1.373 1.373 0 002 1.233l15.44-7.74a1.38 1.38 0 000-2.467v.007z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M12 0a1.5 1.5 0 011.5 1.5v9h9a1.5 1.5 0 110 3h-9v9a1.5 1.5 0 11-3 0v-9h-9a1.5 1.5 0 110-3h9v-9A1.5 1.5 0 0112 0z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.875 10.5h-3.75C.504 10.5 0 11.004 0 11.625v11.25C0 23.496.504 24 1.125 24h3.75C5.496 24 6 23.496 6 22.875v-11.25c0-.621-.504-1.125-1.125-1.125zM3 22.125a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zM18 3.818c0 1.988-1.217 3.104-1.56 4.432h4.768c1.566 0 2.785 1.3 2.792 2.723.004.841-.354 1.746-.911 2.306l-.005.006c.46 1.094.386 2.626-.437 3.725.407 1.213-.003 2.705-.768 3.504.202.825.106 1.527-.288 2.092C20.634 23.981 18.263 24 16.258 24h-.133c-2.264 0-4.116-.825-5.605-1.487-.748-.333-1.726-.745-2.468-.759a.563.563 0 01-.552-.562v-10.02c0-.15.06-.294.167-.4 1.857-1.835 2.655-3.777 4.177-5.302.694-.695.947-1.745 1.19-2.76.209-.868.645-2.71 1.591-2.71C15.75 0 18 .375 18 3.818z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.856 10.561a4.353 4.353 0 00-.421-2.952 4.52 4.52 0 00-.813-3.14C20.578 1.848 18.943 0 15.328 0h-1.041C9.43 0 7.922 1.875 6 1.875h-.508A1.494 1.494 0 004.5 1.5h-3A1.5 1.5 0 000 3v11.25a1.5 1.5 0 001.5 1.5h3c.555 0 1.04-.302 1.299-.75h.33c.898.795 2.157 2.843 3.223 3.91.641.64.476 5.09 3.364 5.09 2.7 0 4.466-1.497 4.466-4.91 0-.862-.184-1.58-.415-2.18h1.71c2.278 0 4.023-1.95 4.023-4.012 0-.898-.233-1.64-.644-2.337zM3 13.875a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm15.477.784h-4.874c0 1.773 1.329 2.596 1.329 4.432 0 1.113 0 2.659-2.216 2.659-.886-.886-.443-3.102-1.773-4.432-1.245-1.245-3.102-4.568-4.431-4.568H6V4.023c2.513 0 4.688-1.773 8.046-1.773h1.772c1.665 0 2.851.803 2.49 3.09.713.382 1.243 1.708.654 2.698 1.012.956.876 2.394.244 3.076.443 0 1.048.886 1.044 1.772-.004.887-.783 1.773-1.773 1.773z" />
              </svg>
            </button>
          </div>
          <button class="btn btn--transparent btn--circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M2.469 6.969a.75.75 0 011.062 0L12 15.439l8.469-8.47a.75.75 0 111.062 1.062l-9 9a.75.75 0 01-1.062 0l-9-9a.75.75 0 010-1.062z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <p class="card__title text">
          <span class="text--bold">S17:E1</span>Let Go, Let Gov
        </p>
        <div class="card__progress flex justify-between items-center">
          <div class="progressbar">
            <div class="progressbar__status"></div>
          </div>
          <span class="text text--bold text--muted">21 of 22m</span>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<div className='micontent'>
<h1>All-Time Favourites</h1>
<div class="cards">
  <div class="wrapper">
    <div class="card card--rounded wrapper__front">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABR0iZ_wk4LcpNbeYZEnimsHO8ell5LNALugiIj0ZPlG8XVqozpdinYeVKk_kSbqE-bLutG38sGp73O1hB9OM8O5XNr6hig9t1RzxZSZ-tv6KtcKTsd6m9YNWkmPA8LaC8Lk-.jpg?r=596" alt="snowpiercer series banner" />
      </div>
    </div>
    <div class="card card--rounded wrapper__back">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABR0iZ_wk4LcpNbeYZEnimsHO8ell5LNALugiIj0ZPlG8XVqozpdinYeVKk_kSbqE-bLutG38sGp73O1hB9OM8O5XNr6hig9t1RzxZSZ-tv6KtcKTsd6m9YNWkmPA8LaC8Lk-.jpg?r=596" alt="snowpiercer series banner" />
      </div>
      <div class="card__body">
        <div class="flex justify-between items-center">
          <div>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M21.44 10.72L5.96 2.98A1.38 1.38 0 004 4.213v15.474a1.373 1.373 0 002 1.233l15.44-7.74a1.38 1.38 0 000-2.467v.007z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M12 0a1.5 1.5 0 011.5 1.5v9h9a1.5 1.5 0 110 3h-9v9a1.5 1.5 0 11-3 0v-9h-9a1.5 1.5 0 110-3h9v-9A1.5 1.5 0 0112 0z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.875 10.5h-3.75C.504 10.5 0 11.004 0 11.625v11.25C0 23.496.504 24 1.125 24h3.75C5.496 24 6 23.496 6 22.875v-11.25c0-.621-.504-1.125-1.125-1.125zM3 22.125a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zM18 3.818c0 1.988-1.217 3.104-1.56 4.432h4.768c1.566 0 2.785 1.3 2.792 2.723.004.841-.354 1.746-.911 2.306l-.005.006c.46 1.094.386 2.626-.437 3.725.407 1.213-.003 2.705-.768 3.504.202.825.106 1.527-.288 2.092C20.634 23.981 18.263 24 16.258 24h-.133c-2.264 0-4.116-.825-5.605-1.487-.748-.333-1.726-.745-2.468-.759a.563.563 0 01-.552-.562v-10.02c0-.15.06-.294.167-.4 1.857-1.835 2.655-3.777 4.177-5.302.694-.695.947-1.745 1.19-2.76.209-.868.645-2.71 1.591-2.71C15.75 0 18 .375 18 3.818z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.856 10.561a4.353 4.353 0 00-.421-2.952 4.52 4.52 0 00-.813-3.14C20.578 1.848 18.943 0 15.328 0h-1.041C9.43 0 7.922 1.875 6 1.875h-.508A1.494 1.494 0 004.5 1.5h-3A1.5 1.5 0 000 3v11.25a1.5 1.5 0 001.5 1.5h3c.555 0 1.04-.302 1.299-.75h.33c.898.795 2.157 2.843 3.223 3.91.641.64.476 5.09 3.364 5.09 2.7 0 4.466-1.497 4.466-4.91 0-.862-.184-1.58-.415-2.18h1.71c2.278 0 4.023-1.95 4.023-4.012 0-.898-.233-1.64-.644-2.337zM3 13.875a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm15.477.784h-4.874c0 1.773 1.329 2.596 1.329 4.432 0 1.113 0 2.659-2.216 2.659-.886-.886-.443-3.102-1.773-4.432-1.245-1.245-3.102-4.568-4.431-4.568H6V4.023c2.513 0 4.688-1.773 8.046-1.773h1.772c1.665 0 2.851.803 2.49 3.09.713.382 1.243 1.708.654 2.698 1.012.956.876 2.394.244 3.076.443 0 1.048.886 1.044 1.772-.004.887-.783 1.773-1.773 1.773z" />
              </svg>
            </button>
          </div>
          <button class="btn btn--transparent btn--circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M2.469 6.969a.75.75 0 011.062 0L12 15.439l8.469-8.47a.75.75 0 111.062 1.062l-9 9a.75.75 0 01-1.062 0l-9-9a.75.75 0 010-1.062z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <p class="card__title text">
          <span class="text--bold">S1:E1</span>"First, the Weather Changed"
        </p>
        <div class="card__progress flex justify-between items-center">
          <div class="progressbar">
            <div class="progressbar__status"></div>
          </div>
          <span class="text text--bold text--muted">51 of 52m</span>
        </div>
      </div>
    </div>
  </div>
  <div class="wrapper">
    <div class="card card--rounded wrapper__front">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSzF2K3cVuI_uS9RGSROS4HNMfh56no8qOnnmiCwcEkfeNuJ-2cebSX0InhBcG4CY-Qs8LM70Caipzgo8KlV_UIqEQFsLCbxp_K2sEfNj0BcQFRw89CnTkxU4coRo6C4bH0L.jpg?r=9e0" alt="money heist series banner" />
      </div>
    </div>
    <div class="card card--rounded wrapper__back">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSzF2K3cVuI_uS9RGSROS4HNMfh56no8qOnnmiCwcEkfeNuJ-2cebSX0InhBcG4CY-Qs8LM70Caipzgo8KlV_UIqEQFsLCbxp_K2sEfNj0BcQFRw89CnTkxU4coRo6C4bH0L.jpg?r=9e0" alt="money heist series banner" />
      </div>
      <div class="card__body">
        <div class="flex justify-between items-center">
          <div>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M21.44 10.72L5.96 2.98A1.38 1.38 0 004 4.213v15.474a1.373 1.373 0 002 1.233l15.44-7.74a1.38 1.38 0 000-2.467v.007z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M12 0a1.5 1.5 0 011.5 1.5v9h9a1.5 1.5 0 110 3h-9v9a1.5 1.5 0 11-3 0v-9h-9a1.5 1.5 0 110-3h9v-9A1.5 1.5 0 0112 0z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.875 10.5h-3.75C.504 10.5 0 11.004 0 11.625v11.25C0 23.496.504 24 1.125 24h3.75C5.496 24 6 23.496 6 22.875v-11.25c0-.621-.504-1.125-1.125-1.125zM3 22.125a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zM18 3.818c0 1.988-1.217 3.104-1.56 4.432h4.768c1.566 0 2.785 1.3 2.792 2.723.004.841-.354 1.746-.911 2.306l-.005.006c.46 1.094.386 2.626-.437 3.725.407 1.213-.003 2.705-.768 3.504.202.825.106 1.527-.288 2.092C20.634 23.981 18.263 24 16.258 24h-.133c-2.264 0-4.116-.825-5.605-1.487-.748-.333-1.726-.745-2.468-.759a.563.563 0 01-.552-.562v-10.02c0-.15.06-.294.167-.4 1.857-1.835 2.655-3.777 4.177-5.302.694-.695.947-1.745 1.19-2.76.209-.868.645-2.71 1.591-2.71C15.75 0 18 .375 18 3.818z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.856 10.561a4.353 4.353 0 00-.421-2.952 4.52 4.52 0 00-.813-3.14C20.578 1.848 18.943 0 15.328 0h-1.041C9.43 0 7.922 1.875 6 1.875h-.508A1.494 1.494 0 004.5 1.5h-3A1.5 1.5 0 000 3v11.25a1.5 1.5 0 001.5 1.5h3c.555 0 1.04-.302 1.299-.75h.33c.898.795 2.157 2.843 3.223 3.91.641.64.476 5.09 3.364 5.09 2.7 0 4.466-1.497 4.466-4.91 0-.862-.184-1.58-.415-2.18h1.71c2.278 0 4.023-1.95 4.023-4.012 0-.898-.233-1.64-.644-2.337zM3 13.875a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm15.477.784h-4.874c0 1.773 1.329 2.596 1.329 4.432 0 1.113 0 2.659-2.216 2.659-.886-.886-.443-3.102-1.773-4.432-1.245-1.245-3.102-4.568-4.431-4.568H6V4.023c2.513 0 4.688-1.773 8.046-1.773h1.772c1.665 0 2.851.803 2.49 3.09.713.382 1.243 1.708.654 2.698 1.012.956.876 2.394.244 3.076.443 0 1.048.886 1.044 1.772-.004.887-.783 1.773-1.773 1.773z" />
              </svg>
            </button>
          </div>
          <button class="btn btn--transparent btn--circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M2.469 6.969a.75.75 0 011.062 0L12 15.439l8.469-8.47a.75.75 0 111.062 1.062l-9 9a.75.75 0 01-1.062 0l-9-9a.75.75 0 010-1.062z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <p class="card__title text">
          <span class="text--bold">P1:E1</span>"Episode 1"
        </p>
        <div class="card__progress flex justify-between items-center">
          <div class="progressbar">
            <div class="progressbar__status"></div>
          </div>
          <span class="text text--bold text--muted">46 of 48m</span>
        </div>
      </div>
    </div>
  </div>
  <div class="wrapper">
    <div class="card card--rounded wrapper__front">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaPaoTHI0949zC6EaStRjDuNbzC7ahtEctYr0EodFNzPbF6GQcrY21fVfKX7F-2jAQlCV8GqCz6mxd6TfvqD87TiN_AuTKdxtuePyg99s8O1JMHj77BY5p2InYgcGgiEcDdt.jpg?r=136" alt="money heist series banner" />
      </div>
    </div>
    <div class="card card--rounded wrapper__back">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaPaoTHI0949zC6EaStRjDuNbzC7ahtEctYr0EodFNzPbF6GQcrY21fVfKX7F-2jAQlCV8GqCz6mxd6TfvqD87TiN_AuTKdxtuePyg99s8O1JMHj77BY5p2InYgcGgiEcDdt.jpg?r=136" alt="money heist series banner" />
      </div>
      <div class="card__body">
        <div class="flex justify-between items-center">
          <div>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M21.44 10.72L5.96 2.98A1.38 1.38 0 004 4.213v15.474a1.373 1.373 0 002 1.233l15.44-7.74a1.38 1.38 0 000-2.467v.007z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M12 0a1.5 1.5 0 011.5 1.5v9h9a1.5 1.5 0 110 3h-9v9a1.5 1.5 0 11-3 0v-9h-9a1.5 1.5 0 110-3h9v-9A1.5 1.5 0 0112 0z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.875 10.5h-3.75C.504 10.5 0 11.004 0 11.625v11.25C0 23.496.504 24 1.125 24h3.75C5.496 24 6 23.496 6 22.875v-11.25c0-.621-.504-1.125-1.125-1.125zM3 22.125a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zM18 3.818c0 1.988-1.217 3.104-1.56 4.432h4.768c1.566 0 2.785 1.3 2.792 2.723.004.841-.354 1.746-.911 2.306l-.005.006c.46 1.094.386 2.626-.437 3.725.407 1.213-.003 2.705-.768 3.504.202.825.106 1.527-.288 2.092C20.634 23.981 18.263 24 16.258 24h-.133c-2.264 0-4.116-.825-5.605-1.487-.748-.333-1.726-.745-2.468-.759a.563.563 0 01-.552-.562v-10.02c0-.15.06-.294.167-.4 1.857-1.835 2.655-3.777 4.177-5.302.694-.695.947-1.745 1.19-2.76.209-.868.645-2.71 1.591-2.71C15.75 0 18 .375 18 3.818z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.856 10.561a4.353 4.353 0 00-.421-2.952 4.52 4.52 0 00-.813-3.14C20.578 1.848 18.943 0 15.328 0h-1.041C9.43 0 7.922 1.875 6 1.875h-.508A1.494 1.494 0 004.5 1.5h-3A1.5 1.5 0 000 3v11.25a1.5 1.5 0 001.5 1.5h3c.555 0 1.04-.302 1.299-.75h.33c.898.795 2.157 2.843 3.223 3.91.641.64.476 5.09 3.364 5.09 2.7 0 4.466-1.497 4.466-4.91 0-.862-.184-1.58-.415-2.18h1.71c2.278 0 4.023-1.95 4.023-4.012 0-.898-.233-1.64-.644-2.337zM3 13.875a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm15.477.784h-4.874c0 1.773 1.329 2.596 1.329 4.432 0 1.113 0 2.659-2.216 2.659-.886-.886-.443-3.102-1.773-4.432-1.245-1.245-3.102-4.568-4.431-4.568H6V4.023c2.513 0 4.688-1.773 8.046-1.773h1.772c1.665 0 2.851.803 2.49 3.09.713.382 1.243 1.708.654 2.698 1.012.956.876 2.394.244 3.076.443 0 1.048.886 1.044 1.772-.004.887-.783 1.773-1.773 1.773z" />
              </svg>
            </button>
          </div>
          <button class="btn btn--transparent btn--circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M2.469 6.969a.75.75 0 011.062 0L12 15.439l8.469-8.47a.75.75 0 111.062 1.062l-9 9a.75.75 0 01-1.062 0l-9-9a.75.75 0 010-1.062z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <p class="card__title text">
          <span class="text--bold">P1:E1</span>"Episode 1"
        </p>
        <div class="card__progress flex justify-between items-center">
          <div class="progressbar">
            <div class="progressbar__status"></div>
          </div>
          <span class="text text--bold text--muted">46 of 48m</span>
        </div>
      </div>
    </div>
  </div>
  <div class="wrapper">
    <div class="card card--rounded wrapper__front">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABboabvkLwzBhpkh3cZkg_8qLAYhJ8Hgeht7ddQ7AF_35wFynyva_ioxyODYL-miPeNhOZhL6S14mD8yif8UZl--T8UjIql3LXSdguA7wHGdFw1SEEMaAdjL0PO64S8HKOwlH.jpg?r=386" alt="queens gambit series banner" />
      </div>
    </div>
    <div class="card card--rounded wrapper__back">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABboabvkLwzBhpkh3cZkg_8qLAYhJ8Hgeht7ddQ7AF_35wFynyva_ioxyODYL-miPeNhOZhL6S14mD8yif8UZl--T8UjIql3LXSdguA7wHGdFw1SEEMaAdjL0PO64S8HKOwlH.jpg?r=386" alt="queens gambit series banner" />
      </div>
      <div class="card__body">
        <div class="flex justify-between items-center">
          <div>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M21.44 10.72L5.96 2.98A1.38 1.38 0 004 4.213v15.474a1.373 1.373 0 002 1.233l15.44-7.74a1.38 1.38 0 000-2.467v.007z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M12 0a1.5 1.5 0 011.5 1.5v9h9a1.5 1.5 0 110 3h-9v9a1.5 1.5 0 11-3 0v-9h-9a1.5 1.5 0 110-3h9v-9A1.5 1.5 0 0112 0z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.875 10.5h-3.75C.504 10.5 0 11.004 0 11.625v11.25C0 23.496.504 24 1.125 24h3.75C5.496 24 6 23.496 6 22.875v-11.25c0-.621-.504-1.125-1.125-1.125zM3 22.125a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zM18 3.818c0 1.988-1.217 3.104-1.56 4.432h4.768c1.566 0 2.785 1.3 2.792 2.723.004.841-.354 1.746-.911 2.306l-.005.006c.46 1.094.386 2.626-.437 3.725.407 1.213-.003 2.705-.768 3.504.202.825.106 1.527-.288 2.092C20.634 23.981 18.263 24 16.258 24h-.133c-2.264 0-4.116-.825-5.605-1.487-.748-.333-1.726-.745-2.468-.759a.563.563 0 01-.552-.562v-10.02c0-.15.06-.294.167-.4 1.857-1.835 2.655-3.777 4.177-5.302.694-.695.947-1.745 1.19-2.76.209-.868.645-2.71 1.591-2.71C15.75 0 18 .375 18 3.818z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.856 10.561a4.353 4.353 0 00-.421-2.952 4.52 4.52 0 00-.813-3.14C20.578 1.848 18.943 0 15.328 0h-1.041C9.43 0 7.922 1.875 6 1.875h-.508A1.494 1.494 0 004.5 1.5h-3A1.5 1.5 0 000 3v11.25a1.5 1.5 0 001.5 1.5h3c.555 0 1.04-.302 1.299-.75h.33c.898.795 2.157 2.843 3.223 3.91.641.64.476 5.09 3.364 5.09 2.7 0 4.466-1.497 4.466-4.91 0-.862-.184-1.58-.415-2.18h1.71c2.278 0 4.023-1.95 4.023-4.012 0-.898-.233-1.64-.644-2.337zM3 13.875a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm15.477.784h-4.874c0 1.773 1.329 2.596 1.329 4.432 0 1.113 0 2.659-2.216 2.659-.886-.886-.443-3.102-1.773-4.432-1.245-1.245-3.102-4.568-4.431-4.568H6V4.023c2.513 0 4.688-1.773 8.046-1.773h1.772c1.665 0 2.851.803 2.49 3.09.713.382 1.243 1.708.654 2.698 1.012.956.876 2.394.244 3.076.443 0 1.048.886 1.044 1.772-.004.887-.783 1.773-1.773 1.773z" />
              </svg>
            </button>
          </div>
          <button class="btn btn--transparent btn--circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M2.469 6.969a.75.75 0 011.062 0L12 15.439l8.469-8.47a.75.75 0 111.062 1.062l-9 9a.75.75 0 01-1.062 0l-9-9a.75.75 0 010-1.062z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <p class="card__title text">
          <span class="text--bold">S1:E2</span>Exchanges
        </p>
        <div class="card__progress flex justify-between items-center">
          <div class="progressbar">
            <div class="progressbar__status"></div>
          </div>
          <span class="text text--bold text--muted">60 of 65m</span>
        </div>
      </div>
    </div>
  </div>
  <div class="wrapper">
    <div class="card card--rounded wrapper__front">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdGArkmNbsxwo0guTuFSXDVskp_nRKAN6u72rmid08gDmXx1jKLtwSy3T1bqyuZPLtgdq00rHFKlGLDZ-L9etjJBsG4GL6WfFiq7uMusbSgHY2jnr_yNE4sHUnuXKs70rFZd.jpg?r=5bb" alt="south park series banner" />
      </div>
    </div>
    <div class="card card--rounded wrapper__back">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdGArkmNbsxwo0guTuFSXDVskp_nRKAN6u72rmid08gDmXx1jKLtwSy3T1bqyuZPLtgdq00rHFKlGLDZ-L9etjJBsG4GL6WfFiq7uMusbSgHY2jnr_yNE4sHUnuXKs70rFZd.jpg?r=5bb" alt="south park series banner" />
      </div>
      <div class="card__body">
        <div class="flex justify-between items-center">
          <div>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M21.44 10.72L5.96 2.98A1.38 1.38 0 004 4.213v15.474a1.373 1.373 0 002 1.233l15.44-7.74a1.38 1.38 0 000-2.467v.007z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M12 0a1.5 1.5 0 011.5 1.5v9h9a1.5 1.5 0 110 3h-9v9a1.5 1.5 0 11-3 0v-9h-9a1.5 1.5 0 110-3h9v-9A1.5 1.5 0 0112 0z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.875 10.5h-3.75C.504 10.5 0 11.004 0 11.625v11.25C0 23.496.504 24 1.125 24h3.75C5.496 24 6 23.496 6 22.875v-11.25c0-.621-.504-1.125-1.125-1.125zM3 22.125a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zM18 3.818c0 1.988-1.217 3.104-1.56 4.432h4.768c1.566 0 2.785 1.3 2.792 2.723.004.841-.354 1.746-.911 2.306l-.005.006c.46 1.094.386 2.626-.437 3.725.407 1.213-.003 2.705-.768 3.504.202.825.106 1.527-.288 2.092C20.634 23.981 18.263 24 16.258 24h-.133c-2.264 0-4.116-.825-5.605-1.487-.748-.333-1.726-.745-2.468-.759a.563.563 0 01-.552-.562v-10.02c0-.15.06-.294.167-.4 1.857-1.835 2.655-3.777 4.177-5.302.694-.695.947-1.745 1.19-2.76.209-.868.645-2.71 1.591-2.71C15.75 0 18 .375 18 3.818z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.856 10.561a4.353 4.353 0 00-.421-2.952 4.52 4.52 0 00-.813-3.14C20.578 1.848 18.943 0 15.328 0h-1.041C9.43 0 7.922 1.875 6 1.875h-.508A1.494 1.494 0 004.5 1.5h-3A1.5 1.5 0 000 3v11.25a1.5 1.5 0 001.5 1.5h3c.555 0 1.04-.302 1.299-.75h.33c.898.795 2.157 2.843 3.223 3.91.641.64.476 5.09 3.364 5.09 2.7 0 4.466-1.497 4.466-4.91 0-.862-.184-1.58-.415-2.18h1.71c2.278 0 4.023-1.95 4.023-4.012 0-.898-.233-1.64-.644-2.337zM3 13.875a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm15.477.784h-4.874c0 1.773 1.329 2.596 1.329 4.432 0 1.113 0 2.659-2.216 2.659-.886-.886-.443-3.102-1.773-4.432-1.245-1.245-3.102-4.568-4.431-4.568H6V4.023c2.513 0 4.688-1.773 8.046-1.773h1.772c1.665 0 2.851.803 2.49 3.09.713.382 1.243 1.708.654 2.698 1.012.956.876 2.394.244 3.076.443 0 1.048.886 1.044 1.772-.004.887-.783 1.773-1.773 1.773z" />
              </svg>
            </button>
          </div>
          <button class="btn btn--transparent btn--circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M2.469 6.969a.75.75 0 011.062 0L12 15.439l8.469-8.47a.75.75 0 111.062 1.062l-9 9a.75.75 0 01-1.062 0l-9-9a.75.75 0 010-1.062z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <p class="card__title text">
          <span class="text--bold">S17:E1</span>Let Go, Let Gov
        </p>
        <div class="card__progress flex justify-between items-center">
          <div class="progressbar">
            <div class="progressbar__status"></div>
          </div>
          <span class="text text--bold text--muted">21 of 22m</span>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<div className='micontent'>
<h1>Award Winning Movies</h1>
<div class="cards">
  <div class="wrapper">
    <div class="card card--rounded wrapper__front">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABf1MyEn7Gf4aIe-nPR0RswdQ-5vmeGICPomMSWaiK27Nuab8rVGKf7N7fOrDye4BDShktmCHt-KXL-ccM2bQyfiRTnobJBq3VqPGrnkLc-hJDmmf8Gk1mUrlGqhe9ldzn3v3.jpg?r=073" alt="snowpiercer series banner" />
      </div>
    </div>
    <div class="card card--rounded wrapper__back">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABf1MyEn7Gf4aIe-nPR0RswdQ-5vmeGICPomMSWaiK27Nuab8rVGKf7N7fOrDye4BDShktmCHt-KXL-ccM2bQyfiRTnobJBq3VqPGrnkLc-hJDmmf8Gk1mUrlGqhe9ldzn3v3.jpg?r=073" alt="snowpiercer series banner" />
      </div>
      <div class="card__body">
        <div class="flex justify-between items-center">
          <div>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M21.44 10.72L5.96 2.98A1.38 1.38 0 004 4.213v15.474a1.373 1.373 0 002 1.233l15.44-7.74a1.38 1.38 0 000-2.467v.007z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M12 0a1.5 1.5 0 011.5 1.5v9h9a1.5 1.5 0 110 3h-9v9a1.5 1.5 0 11-3 0v-9h-9a1.5 1.5 0 110-3h9v-9A1.5 1.5 0 0112 0z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.875 10.5h-3.75C.504 10.5 0 11.004 0 11.625v11.25C0 23.496.504 24 1.125 24h3.75C5.496 24 6 23.496 6 22.875v-11.25c0-.621-.504-1.125-1.125-1.125zM3 22.125a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zM18 3.818c0 1.988-1.217 3.104-1.56 4.432h4.768c1.566 0 2.785 1.3 2.792 2.723.004.841-.354 1.746-.911 2.306l-.005.006c.46 1.094.386 2.626-.437 3.725.407 1.213-.003 2.705-.768 3.504.202.825.106 1.527-.288 2.092C20.634 23.981 18.263 24 16.258 24h-.133c-2.264 0-4.116-.825-5.605-1.487-.748-.333-1.726-.745-2.468-.759a.563.563 0 01-.552-.562v-10.02c0-.15.06-.294.167-.4 1.857-1.835 2.655-3.777 4.177-5.302.694-.695.947-1.745 1.19-2.76.209-.868.645-2.71 1.591-2.71C15.75 0 18 .375 18 3.818z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.856 10.561a4.353 4.353 0 00-.421-2.952 4.52 4.52 0 00-.813-3.14C20.578 1.848 18.943 0 15.328 0h-1.041C9.43 0 7.922 1.875 6 1.875h-.508A1.494 1.494 0 004.5 1.5h-3A1.5 1.5 0 000 3v11.25a1.5 1.5 0 001.5 1.5h3c.555 0 1.04-.302 1.299-.75h.33c.898.795 2.157 2.843 3.223 3.91.641.64.476 5.09 3.364 5.09 2.7 0 4.466-1.497 4.466-4.91 0-.862-.184-1.58-.415-2.18h1.71c2.278 0 4.023-1.95 4.023-4.012 0-.898-.233-1.64-.644-2.337zM3 13.875a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm15.477.784h-4.874c0 1.773 1.329 2.596 1.329 4.432 0 1.113 0 2.659-2.216 2.659-.886-.886-.443-3.102-1.773-4.432-1.245-1.245-3.102-4.568-4.431-4.568H6V4.023c2.513 0 4.688-1.773 8.046-1.773h1.772c1.665 0 2.851.803 2.49 3.09.713.382 1.243 1.708.654 2.698 1.012.956.876 2.394.244 3.076.443 0 1.048.886 1.044 1.772-.004.887-.783 1.773-1.773 1.773z" />
              </svg>
            </button>
          </div>
          <button class="btn btn--transparent btn--circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M2.469 6.969a.75.75 0 011.062 0L12 15.439l8.469-8.47a.75.75 0 111.062 1.062l-9 9a.75.75 0 01-1.062 0l-9-9a.75.75 0 010-1.062z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <p class="card__title text">
          <span class="text--bold">S1:E1</span>"First, the Weather Changed"
        </p>
        <div class="card__progress flex justify-between items-center">
          <div class="progressbar">
            <div class="progressbar__status"></div>
          </div>
          <span class="text text--bold text--muted">51 of 52m</span>
        </div>
      </div>
    </div>
  </div>
  <div class="wrapper">
    <div class="card card--rounded wrapper__front">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABe_-hF5m1Q_zuDgWTzBtTlPtrtANI3N7fo9aoo5A0_xZ9SyegpNQscvjPS53QU8qLNHhxNd4zy2pfHg6d5160ozF6sVuhglhR0cB5Lfbg1AB00qWybsThMQoz3Hkd9A58F83.jpg?r=840" alt="money heist series banner" />
      </div>
    </div>
    <div class="card card--rounded wrapper__back">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABe_-hF5m1Q_zuDgWTzBtTlPtrtANI3N7fo9aoo5A0_xZ9SyegpNQscvjPS53QU8qLNHhxNd4zy2pfHg6d5160ozF6sVuhglhR0cB5Lfbg1AB00qWybsThMQoz3Hkd9A58F83.jpg?r=840" alt="money heist series banner" />
      </div>
      <div class="card__body">
        <div class="flex justify-between items-center">
          <div>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M21.44 10.72L5.96 2.98A1.38 1.38 0 004 4.213v15.474a1.373 1.373 0 002 1.233l15.44-7.74a1.38 1.38 0 000-2.467v.007z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M12 0a1.5 1.5 0 011.5 1.5v9h9a1.5 1.5 0 110 3h-9v9a1.5 1.5 0 11-3 0v-9h-9a1.5 1.5 0 110-3h9v-9A1.5 1.5 0 0112 0z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.875 10.5h-3.75C.504 10.5 0 11.004 0 11.625v11.25C0 23.496.504 24 1.125 24h3.75C5.496 24 6 23.496 6 22.875v-11.25c0-.621-.504-1.125-1.125-1.125zM3 22.125a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zM18 3.818c0 1.988-1.217 3.104-1.56 4.432h4.768c1.566 0 2.785 1.3 2.792 2.723.004.841-.354 1.746-.911 2.306l-.005.006c.46 1.094.386 2.626-.437 3.725.407 1.213-.003 2.705-.768 3.504.202.825.106 1.527-.288 2.092C20.634 23.981 18.263 24 16.258 24h-.133c-2.264 0-4.116-.825-5.605-1.487-.748-.333-1.726-.745-2.468-.759a.563.563 0 01-.552-.562v-10.02c0-.15.06-.294.167-.4 1.857-1.835 2.655-3.777 4.177-5.302.694-.695.947-1.745 1.19-2.76.209-.868.645-2.71 1.591-2.71C15.75 0 18 .375 18 3.818z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.856 10.561a4.353 4.353 0 00-.421-2.952 4.52 4.52 0 00-.813-3.14C20.578 1.848 18.943 0 15.328 0h-1.041C9.43 0 7.922 1.875 6 1.875h-.508A1.494 1.494 0 004.5 1.5h-3A1.5 1.5 0 000 3v11.25a1.5 1.5 0 001.5 1.5h3c.555 0 1.04-.302 1.299-.75h.33c.898.795 2.157 2.843 3.223 3.91.641.64.476 5.09 3.364 5.09 2.7 0 4.466-1.497 4.466-4.91 0-.862-.184-1.58-.415-2.18h1.71c2.278 0 4.023-1.95 4.023-4.012 0-.898-.233-1.64-.644-2.337zM3 13.875a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm15.477.784h-4.874c0 1.773 1.329 2.596 1.329 4.432 0 1.113 0 2.659-2.216 2.659-.886-.886-.443-3.102-1.773-4.432-1.245-1.245-3.102-4.568-4.431-4.568H6V4.023c2.513 0 4.688-1.773 8.046-1.773h1.772c1.665 0 2.851.803 2.49 3.09.713.382 1.243 1.708.654 2.698 1.012.956.876 2.394.244 3.076.443 0 1.048.886 1.044 1.772-.004.887-.783 1.773-1.773 1.773z" />
              </svg>
            </button>
          </div>
          <button class="btn btn--transparent btn--circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M2.469 6.969a.75.75 0 011.062 0L12 15.439l8.469-8.47a.75.75 0 111.062 1.062l-9 9a.75.75 0 01-1.062 0l-9-9a.75.75 0 010-1.062z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <p class="card__title text">
          <span class="text--bold">P1:E1</span>"Episode 1"
        </p>
        <div class="card__progress flex justify-between items-center">
          <div class="progressbar">
            <div class="progressbar__status"></div>
          </div>
          <span class="text text--bold text--muted">46 of 48m</span>
        </div>
      </div>
    </div>
  </div>
  <div class="wrapper">
    <div class="card card--rounded wrapper__front">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABevAMwMWgM2wTZZC18JSilxEj6DAiHpJ_OfB-fkHl4NtoWOlxXmwgPIIDct8P1DGRkSu2IaQ3J2Oclh7Q7FcNUhFRG3r2wxiYbs.jpg?r=4ca" alt="money heist series banner" />
      </div>
    </div>
    <div class="card card--rounded wrapper__back">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABevAMwMWgM2wTZZC18JSilxEj6DAiHpJ_OfB-fkHl4NtoWOlxXmwgPIIDct8P1DGRkSu2IaQ3J2Oclh7Q7FcNUhFRG3r2wxiYbs.jpg?r=4ca" alt="money heist series banner" />
      </div>
      <div class="card__body">
        <div class="flex justify-between items-center">
          <div>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M21.44 10.72L5.96 2.98A1.38 1.38 0 004 4.213v15.474a1.373 1.373 0 002 1.233l15.44-7.74a1.38 1.38 0 000-2.467v.007z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M12 0a1.5 1.5 0 011.5 1.5v9h9a1.5 1.5 0 110 3h-9v9a1.5 1.5 0 11-3 0v-9h-9a1.5 1.5 0 110-3h9v-9A1.5 1.5 0 0112 0z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.875 10.5h-3.75C.504 10.5 0 11.004 0 11.625v11.25C0 23.496.504 24 1.125 24h3.75C5.496 24 6 23.496 6 22.875v-11.25c0-.621-.504-1.125-1.125-1.125zM3 22.125a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zM18 3.818c0 1.988-1.217 3.104-1.56 4.432h4.768c1.566 0 2.785 1.3 2.792 2.723.004.841-.354 1.746-.911 2.306l-.005.006c.46 1.094.386 2.626-.437 3.725.407 1.213-.003 2.705-.768 3.504.202.825.106 1.527-.288 2.092C20.634 23.981 18.263 24 16.258 24h-.133c-2.264 0-4.116-.825-5.605-1.487-.748-.333-1.726-.745-2.468-.759a.563.563 0 01-.552-.562v-10.02c0-.15.06-.294.167-.4 1.857-1.835 2.655-3.777 4.177-5.302.694-.695.947-1.745 1.19-2.76.209-.868.645-2.71 1.591-2.71C15.75 0 18 .375 18 3.818z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.856 10.561a4.353 4.353 0 00-.421-2.952 4.52 4.52 0 00-.813-3.14C20.578 1.848 18.943 0 15.328 0h-1.041C9.43 0 7.922 1.875 6 1.875h-.508A1.494 1.494 0 004.5 1.5h-3A1.5 1.5 0 000 3v11.25a1.5 1.5 0 001.5 1.5h3c.555 0 1.04-.302 1.299-.75h.33c.898.795 2.157 2.843 3.223 3.91.641.64.476 5.09 3.364 5.09 2.7 0 4.466-1.497 4.466-4.91 0-.862-.184-1.58-.415-2.18h1.71c2.278 0 4.023-1.95 4.023-4.012 0-.898-.233-1.64-.644-2.337zM3 13.875a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm15.477.784h-4.874c0 1.773 1.329 2.596 1.329 4.432 0 1.113 0 2.659-2.216 2.659-.886-.886-.443-3.102-1.773-4.432-1.245-1.245-3.102-4.568-4.431-4.568H6V4.023c2.513 0 4.688-1.773 8.046-1.773h1.772c1.665 0 2.851.803 2.49 3.09.713.382 1.243 1.708.654 2.698 1.012.956.876 2.394.244 3.076.443 0 1.048.886 1.044 1.772-.004.887-.783 1.773-1.773 1.773z" />
              </svg>
            </button>
          </div>
          <button class="btn btn--transparent btn--circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M2.469 6.969a.75.75 0 011.062 0L12 15.439l8.469-8.47a.75.75 0 111.062 1.062l-9 9a.75.75 0 01-1.062 0l-9-9a.75.75 0 010-1.062z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <p class="card__title text">
          <span class="text--bold">P1:E1</span>"Episode 1"
        </p>
        <div class="card__progress flex justify-between items-center">
          <div class="progressbar">
            <div class="progressbar__status"></div>
          </div>
          <span class="text text--bold text--muted">46 of 48m</span>
        </div>
      </div>
    </div>
  </div>
  <div class="wrapper">
    <div class="card card--rounded wrapper__front">
      <div class="card__header">
        <img class="card__image" src="https://bit.ly/3hXjrJB" alt="queens gambit series banner" />
      </div>
    </div>
    <div class="card card--rounded wrapper__back">
      <div class="card__header">
        <img class="card__image" src="https://bit.ly/3hXjrJB" alt="queens gambit series banner" />
      </div>
      <div class="card__body">
        <div class="flex justify-between items-center">
          <div>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M21.44 10.72L5.96 2.98A1.38 1.38 0 004 4.213v15.474a1.373 1.373 0 002 1.233l15.44-7.74a1.38 1.38 0 000-2.467v.007z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M12 0a1.5 1.5 0 011.5 1.5v9h9a1.5 1.5 0 110 3h-9v9a1.5 1.5 0 11-3 0v-9h-9a1.5 1.5 0 110-3h9v-9A1.5 1.5 0 0112 0z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.875 10.5h-3.75C.504 10.5 0 11.004 0 11.625v11.25C0 23.496.504 24 1.125 24h3.75C5.496 24 6 23.496 6 22.875v-11.25c0-.621-.504-1.125-1.125-1.125zM3 22.125a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zM18 3.818c0 1.988-1.217 3.104-1.56 4.432h4.768c1.566 0 2.785 1.3 2.792 2.723.004.841-.354 1.746-.911 2.306l-.005.006c.46 1.094.386 2.626-.437 3.725.407 1.213-.003 2.705-.768 3.504.202.825.106 1.527-.288 2.092C20.634 23.981 18.263 24 16.258 24h-.133c-2.264 0-4.116-.825-5.605-1.487-.748-.333-1.726-.745-2.468-.759a.563.563 0 01-.552-.562v-10.02c0-.15.06-.294.167-.4 1.857-1.835 2.655-3.777 4.177-5.302.694-.695.947-1.745 1.19-2.76.209-.868.645-2.71 1.591-2.71C15.75 0 18 .375 18 3.818z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.856 10.561a4.353 4.353 0 00-.421-2.952 4.52 4.52 0 00-.813-3.14C20.578 1.848 18.943 0 15.328 0h-1.041C9.43 0 7.922 1.875 6 1.875h-.508A1.494 1.494 0 004.5 1.5h-3A1.5 1.5 0 000 3v11.25a1.5 1.5 0 001.5 1.5h3c.555 0 1.04-.302 1.299-.75h.33c.898.795 2.157 2.843 3.223 3.91.641.64.476 5.09 3.364 5.09 2.7 0 4.466-1.497 4.466-4.91 0-.862-.184-1.58-.415-2.18h1.71c2.278 0 4.023-1.95 4.023-4.012 0-.898-.233-1.64-.644-2.337zM3 13.875a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm15.477.784h-4.874c0 1.773 1.329 2.596 1.329 4.432 0 1.113 0 2.659-2.216 2.659-.886-.886-.443-3.102-1.773-4.432-1.245-1.245-3.102-4.568-4.431-4.568H6V4.023c2.513 0 4.688-1.773 8.046-1.773h1.772c1.665 0 2.851.803 2.49 3.09.713.382 1.243 1.708.654 2.698 1.012.956.876 2.394.244 3.076.443 0 1.048.886 1.044 1.772-.004.887-.783 1.773-1.773 1.773z" />
              </svg>
            </button>
          </div>
          <button class="btn btn--transparent btn--circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M2.469 6.969a.75.75 0 011.062 0L12 15.439l8.469-8.47a.75.75 0 111.062 1.062l-9 9a.75.75 0 01-1.062 0l-9-9a.75.75 0 010-1.062z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <p class="card__title text">
          <span class="text--bold">S1:E2</span>Exchanges
        </p>
        <div class="card__progress flex justify-between items-center">
          <div class="progressbar">
            <div class="progressbar__status"></div>
          </div>
          <span class="text text--bold text--muted">60 of 65m</span>
        </div>
      </div>
    </div>
  </div>
  <div class="wrapper">
    <div class="card card--rounded wrapper__front">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSkZNGy0bqi_lnELOWsdsbXqf_tsN-kUCeuA7mpmK7he1jKBhLWAbcxzBz5dcsrTwZMZSnNtrq2KwXq90EFUaJ621_4u96MQ7BoElcKi0AUI9tMPQ2QEg5Q25tLcfV0ctKRT.jpg?r=7f0" alt="south park series banner" />
      </div>
    </div>
    <div class="card card--rounded wrapper__back">
      <div class="card__header">
        <img class="card__image" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSkZNGy0bqi_lnELOWsdsbXqf_tsN-kUCeuA7mpmK7he1jKBhLWAbcxzBz5dcsrTwZMZSnNtrq2KwXq90EFUaJ621_4u96MQ7BoElcKi0AUI9tMPQ2QEg5Q25tLcfV0ctKRT.jpg?r=7f0" alt="south park series banner" />
      </div>
      <div class="card__body">
        <div class="flex justify-between items-center">
          <div>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M21.44 10.72L5.96 2.98A1.38 1.38 0 004 4.213v15.474a1.373 1.373 0 002 1.233l15.44-7.74a1.38 1.38 0 000-2.467v.007z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M12 0a1.5 1.5 0 011.5 1.5v9h9a1.5 1.5 0 110 3h-9v9a1.5 1.5 0 11-3 0v-9h-9a1.5 1.5 0 110-3h9v-9A1.5 1.5 0 0112 0z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.875 10.5h-3.75C.504 10.5 0 11.004 0 11.625v11.25C0 23.496.504 24 1.125 24h3.75C5.496 24 6 23.496 6 22.875v-11.25c0-.621-.504-1.125-1.125-1.125zM3 22.125a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zM18 3.818c0 1.988-1.217 3.104-1.56 4.432h4.768c1.566 0 2.785 1.3 2.792 2.723.004.841-.354 1.746-.911 2.306l-.005.006c.46 1.094.386 2.626-.437 3.725.407 1.213-.003 2.705-.768 3.504.202.825.106 1.527-.288 2.092C20.634 23.981 18.263 24 16.258 24h-.133c-2.264 0-4.116-.825-5.605-1.487-.748-.333-1.726-.745-2.468-.759a.563.563 0 01-.552-.562v-10.02c0-.15.06-.294.167-.4 1.857-1.835 2.655-3.777 4.177-5.302.694-.695.947-1.745 1.19-2.76.209-.868.645-2.71 1.591-2.71C15.75 0 18 .375 18 3.818z" />
              </svg>
            </button>
            <button class="btn btn--transparent btn--circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.856 10.561a4.353 4.353 0 00-.421-2.952 4.52 4.52 0 00-.813-3.14C20.578 1.848 18.943 0 15.328 0h-1.041C9.43 0 7.922 1.875 6 1.875h-.508A1.494 1.494 0 004.5 1.5h-3A1.5 1.5 0 000 3v11.25a1.5 1.5 0 001.5 1.5h3c.555 0 1.04-.302 1.299-.75h.33c.898.795 2.157 2.843 3.223 3.91.641.64.476 5.09 3.364 5.09 2.7 0 4.466-1.497 4.466-4.91 0-.862-.184-1.58-.415-2.18h1.71c2.278 0 4.023-1.95 4.023-4.012 0-.898-.233-1.64-.644-2.337zM3 13.875a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm15.477.784h-4.874c0 1.773 1.329 2.596 1.329 4.432 0 1.113 0 2.659-2.216 2.659-.886-.886-.443-3.102-1.773-4.432-1.245-1.245-3.102-4.568-4.431-4.568H6V4.023c2.513 0 4.688-1.773 8.046-1.773h1.772c1.665 0 2.851.803 2.49 3.09.713.382 1.243 1.708.654 2.698 1.012.956.876 2.394.244 3.076.443 0 1.048.886 1.044 1.772-.004.887-.783 1.773-1.773 1.773z" />
              </svg>
            </button>
          </div>
          <button class="btn btn--transparent btn--circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M2.469 6.969a.75.75 0 011.062 0L12 15.439l8.469-8.47a.75.75 0 111.062 1.062l-9 9a.75.75 0 01-1.062 0l-9-9a.75.75 0 010-1.062z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <p class="card__title text">
          <span class="text--bold">S17:E1</span>Let Go, Let Gov
        </p>
        <div class="card__progress flex justify-between items-center">
          <div class="progressbar">
            <div class="progressbar__status"></div>
          </div>
          <span class="text text--bold text--muted">21 of 22m</span>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<div className='micontent'>
</div>
</div>
</>
)
}

export default movies