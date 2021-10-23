import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>StaffAny Assessment</h1>
    <form className="form-label form-css-label">
    <fieldset>
      <input id="firstName" name="firstName" type="text"  required />
      <label htmlFor="firstName">First Name</label>
    </fieldset>
    <fieldset>
      <input id="lastName" name="lastName" type="text"  required />
      <label htmlFor="lastName">Last Name</label>
    </fieldset>
    <fieldset>
      <input id="email" name="email" type="text"  required />
      <label htmlFor="email">Email Address</label>
    </fieldset>
  </form>

  <form className="form-label form-css-label">
    <fieldset>
      <input id="username" name="username" type="text"  required />
      <label htmlFor="username">Username</label>
    </fieldset>
    <fieldset>
      <input id="password" name="password" type="password"  required />
      <label htmlFor="password">Password</label>
    </fieldset>
    <fieldset>
      <input id="cpassword" name="cpassword" type="password"  required />
      <label htmlFor="cpassword">Confirm Password</label>
    </fieldset>
  </form>
  
  <p>JS-version Animated 'Reminder' Placeholders using &lt;label&gt; supported HTML5 input type</p>
  <form className="form-label form-js-label">
    <fieldset>
      <input id="userName" name="userName" type="text"  required />
      <label htmlFor="userName">User Name</label>
    </fieldset>
    <fieldset>
      <input id="userEmail" name="userEmail" type="email"  required />
      <label htmlFor="userEmail">Email Address</label>
    </fieldset>
    <fieldset>
      <input id="description" name="description" type="text"  />
      <label htmlFor="description">Desciption (not required)</label>
    </fieldset>
  </form>
    <button className="btn btn-primary">Click Here</button>

  <div className="modal">
    <div className="modal-content">
      <div className="modal-header">
        <span className="close">&times;</span>
        <h2>Modal Header</h2>
      </div>
      <div className="modal-body">
        <p>This is my modal</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repellendus nisi, sunt consectetur ipsa velit
          repudiandae aperiam modi quisquam nihil nam asperiores doloremque mollitia dolor deleniti quibusdam nemo
          commodi ab.</p>
      </div>
      <div className="modal-footer">
        <h3>Modal Footer</h3>
      </div>
    </div>
  </div>
<div className="contain">

<figure className="bar-chart">
	
	<div className="row bars">
		<div className="y-axis">
			<div className="segment">
				<span className="label">00:00</span>
			</div>
			<div className="segment">
				<span className="label">01:00</span>
			</div>
			<div className="segment">
				<span className="label">02:00</span>
			</div>
			<div className="segment">
				<span className="label">03:00</span>
			</div>
			<div className="segment">
				<span className="label">04:00</span>
			</div>
			<div className="segment">
				<span className="label">05:00</span>
			</div>
			<div className="segment">
				<span className="label">06:00</span>
			</div>
			<div className="segment">
				<span className="label">07:00</span>
			</div>
			<div className="segment">
				<span className="label">08:00</span>
			</div>
			<div className="segment">
				<span className="label">09:00</span>
			</div>
			<div className="segment">
				<span className="label">10:00</span>
			</div>
			<div className="segment">
				<span className="label">11:00</span>
			</div>
			<div className="segment">
				<span className="label">12:00</span>
			</div>
			<div className="segment">
				<span className="label">13:00</span>
			</div>
			<div className="segment">
				<span className="label">14:00</span>
			</div>
			<div className="segment">
				<span className="label">15:00</span>
			</div>
			<div className="segment">
				<span className="label">16:00</span>
			</div>
			<div className="segment">
				<span className="label">17:00</span>
			</div>
			<div className="segment">
				<span className="label">18:00</span>
			</div>
			<div className="segment">
				<span className="label">19:00</span>
			</div>
			<div className="segment">
				<span className="label">20:00</span>
			</div>
      <div className="segment">
				<span className="label">21:00</span>
			</div>
			<div className="segment">
				<span className="label">22:00</span>
			</div>
			<div className="segment">
				<span className="label">23:00</span>
			</div>
			<div className="segment">
				<span className="label">24:00</span>
			</div>
		</div>
		<div className="x-axis">
			
    <div className="year wrap">
				<div className="col">
					<span className="bar" style={{height: '35%'}}></span>
          <span className="bar" style={{height: '35%'}}></span>
          <span className="bar" style={{height: '26%'}}>
            <button></button>
          </span>
				</div>
				<span className="label">Sunday</span>
			</div>
			<div className="year wrap">
				<div className="col">
					<span className="bar" style={{height: '35%'}}></span>
          <span className="bar" style={{height: '35%'}}></span>
          <span className="bar" style={{height: '26%'}}>
            <button></button>
          </span>
				</div>
				<span className="label">Sunday</span>
			</div>
			<div className="year wrap">
				<div className="col">
					<span className="bar" style={{height: '35%'}}></span>
          <span className="bar" style={{height: '35%'}}></span>
          <span className="bar" style={{height: '26%'}}>
            <button></button>
          </span>
				</div>
				<span className="label">Sunday</span>
			</div>
			<div className="year wrap">
				<div className="col">
					<span className="bar" style={{height: '35%'}}></span>
          <span className="bar" style={{height: '35%'}}></span>
          <span className="bar" style={{height: '26%'}}>
            <button></button>
          </span>
				</div>
				<span className="label">Sunday</span>
			</div>
			<div className="year wrap">
				<div className="col">
					<span className="bar" style={{height: '35%'}}></span>
          <span className="bar" style={{height: '35%'}}></span>
          <span className="bar" style={{height: '26%'}}>
            <button></button>
          </span>
				</div>
				<span className="label">Sunday</span>
			</div>
			<div className="year wrap">
				<div className="col">
					<span className="bar" style={{height: '35%'}}></span>
          <span className="bar" style={{height: '35%'}}></span>
          <span className="bar" style={{height: '26%'}}>
            <button></button>
          </span>
				</div>
				<span className="label">Sunday</span>
			</div>
			<div className="year wrap">
				<div className="col">
					<span className="bar" style={{height: '35%'}}></span>
          <span className="bar" style={{height: '35%'}}></span>
          <span className="bar" style={{height: '26%'}}>
            <button></button>
          </span>
				</div>
				<span className="label">Sunday</span>
			</div>
		</div>
	</div>
	
</figure>
  
</div>
  </Layout>
)

export default IndexPage
