import React from 'react'

function Survey() {
  return (
    <div className='bg-light py-3 py-lg-5'>
      <div className="container">
        <div className="text-center">
          <h1 className='display-5'>Start Survey</h1>
          <p className='lead'>Detailed Survey subtitle</p>
        </div>
        <ul className='nav nav-tabs nav-justified' role='tablist'>
          <li className='nav-item' role='persentation'>
            <a href='#step-1' className='nav-link h5 mb-0 active' id='step-1-tap' data-toggle='tab' role='tab' aria-controls='step-1' aria-selected='true' >Step 1 <br /> <small className='d-none d-md-inline'>Personal Info</small></a>
          </li> {/* step-1 */}
          <li className='nav-item' role='persentation'>
            <a href='#step-2' className='nav-link h5 mb-0 ' id='step-2-tap' data-toggle='tab' role='tab' aria-controls='step-2' aria-selected='false' >Step 2 <br /> <small className='d-none d-md-inline'>Questions to Answer</small></a>
          </li> {/* step-2 */}
          <li className='nav-item' role='persentation'>
            <a href='#step-3' className='nav-link h5 mb-0 ' id='step-3-tap' data-toggle='tab' role='tab' aria-controls='step-3' aria-selected='false' >Step 3 <br /> <small className='d-none d-md-inline'>Quistion to rate</small></a>
          </li> {/* step-3 */}
        </ul>
        <div className='tab-content'>
          <div className='tab-pane fade pt-4 show active' id='step-1' role='tabpanel' aria-labelledby='step-1-tab' >
            <div className='row'>
              <div className='col-md-3 mb-3'>
                <label className='form-label' htmlFor='sex-male'>Sex:</label>
                <div>
                  <div className='form-check form-check-inline'>
                    <input type='radio'className='form-check-input' name='sex' id='sex-male' value='male' />
                    <label className='form-check-label' htmlFor='sex-male'>Male</label>
                  </div>
                  <div className='form-check form-check-inline'>
                    <input type='radio'className='form-check-input' name='sex' id='sex-female' value='female' />
                    <label className='form-check-label' htmlFor='sex-female'>Female</label>
                  </div>
                </div>
              </div>
              <div className='col-md-3 mb-3'>
                <label className='form-label' htmlFor='age'>Age:</label>
                <input className='form-control' type='number' min='15' max='99' name='age' id='age' />
              </div>
              <div className='col-md-6 mb-3'>
                <label className='form-label' htmlFor='phone'>Phone number:</label>
                <input className='form-control' type='tel' name='phone' id='phone' />
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6 mb-3'>
                <label className='form-label' htmlFor='name'>name:</label>
                <input className='form-control' type='text' name='name' id='name' />
              </div>
              <div className='col-md-6 mb-3'>
                <label className='form-label' htmlFor='email'>email:</label>
                <input className='form-control' type='email' name='email' id='email' />
              </div>
            </div>
          </div>
        </div>{/* step-1-content */}
        <div className='tab-content'>
          <div className='tab-pane fade pt-4' id='step-2' role='tabpanel' aria-labelledby='step-2-tab' >
            lorem2
          </div>
        </div>{/* step-2-content */}
        <div className='tab-content'>
          <div className='tab-pane fade pt-4' id='step-3' role='tabpanel' aria-labelledby='step-3-tab' >
            lorem3
          </div>
        </div>{/* step-3-content */}
      </div>
{/*  */}
    </div>
  )
}

export default Survey