import React, {useState} from 'react'
import emailjs from 'emailjs-com'
import './ContactView.css'
import {Global} from "../../../Global";
import {isPortrait} from '../../../App'

export function ContactView() {
	interface MyFormValues {
		is_societe: boolean,
		nom: string;
		prenom: string;
		societe: string,
		sujet: string,
		description: string,
		email: string,
		phone: string;
	}

	const initialValues: MyFormValues = {
		is_societe: false,
		nom: '',
		prenom: '',
		societe: '',
		sujet: '',
		description: '',
		email: '',
		phone: ''
	}
	const [values, setValues] = useState(initialValues)
	const [formSent, setFormSent] = useState(false)

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const phoneInputCharacters = ['+', ' ', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
	const set = (name: string) => {
		// @ts-ignore
		return ({target: {value}}) => {
			setValues(oldValues => ({...oldValues, [name]: value}));
		}
	};

	const toggleIsSociete = () => setValues(oldValues => ({...oldValues, 'is_societe': !values.is_societe}))

	function resetForm() {
		setValues(initialValues)
		setFormSent(true)
	}

	function submitHandler(e: any) {
		e.preventDefault()
		console.log("Sending: " + e.target)
		emailjs.sendForm('service_702j3vf', 'website_form', e.target, 'user_mGcPAMqJU7XjfZ8HrTc9A')
			.then((result) => {
				console.log(result.text)
				resetForm()
			}, (error) => {
				console.log(error.text)
			})
	}

	return <div className="ContactView" id="contact">
		<div className="left">
			{isPortrait() && <div className="hover_text">Nous contacter</div>}
		</div>
		<div className="right">
			<div className="right_inner_left">
				{formSent ?
					<div className="form_sent">
						Votre demande a été transmise !<br/>
						Nous vous recontacterons sous peu.
					</div>
					:
					<form onSubmit={submitHandler}>
						<div className="status_container">
							<div className="input_container">
								<input type="radio" value="true" id="societe" onChange={toggleIsSociete}
									   name="is_societe" defaultChecked={values.is_societe}/>
								<label htmlFor="societe">Societe</label>
							</div>
							<div className="input_container">
								<input type="radio" value="false" id="particulier" onChange={toggleIsSociete}
									   name="is_societe" defaultChecked={!values.is_societe}/>
								<label htmlFor="particulier">Particulier</label>
							</div>
						</div>

						<div className="identifier_container">
							{values.is_societe ?
								<div className="societe_container">
									<div className="input_container">
										<label>Societe:</label>
										<input required value={values.societe} maxLength={30}
											   placeholder="EURL . . . . . . " name="societe"
											   onChange={set('societe')}/>
									</div>
								</div>
								:
								<div className="particulier_container">
									<div className="input_container nom">
										<label>Nom:</label>
										<input required value={values.nom} maxLength={30} placeholder="Dupont"
											   name="nom" onChange={set('nom')}/>
									</div>
									<div className="input_container">
										<label>Prenom:</label>
										<input required value={values.prenom} maxLength={30} placeholder="Pierre"
											   name="prenom" onChange={set('prenom')}/>
									</div>
								</div>
							}
						</div>

						<div className="static_container">
							<div className="contact_container">
								<div className="input_container mail">
									<label>Adresse e-mail:</label>
									<input required value={values.email} maxLength={40} type="email"
										   name="email" placeholder="pierre.dupont@mail.com" onChange={set('email')}/>
								</div>
								<div className="input_container">
									<label>Télephone:</label>
									<input required value={values.phone} maxLength={16} type="tel"
										   placeholder="+33 _ __ __ __ __" name="phone"
										   onChange={set('phone')}/>
								</div>
							</div>
							<div className="content_container">
								<div className="input_container sujet">
									<label>Sujet:</label>
									<input required value={values.sujet} maxLength={30}
										   placeholder="Mise aux normes hôtel"
										   name="sujet" onChange={set('sujet')}/>
								</div>
								<div className="input_container description">
									<label>Description:</label>
									<textarea required id="description" value={values.description} name="description"
											  maxLength={1500} onChange={set('description')}
											  placeholder={"Décrivez le motif avec précision.\nNous vous recontacterons dans les plus brefs délais."}/>
								</div>
							</div>
						</div>
						<input disabled={false} type="submit" value="Submit"/>
					</form>}
			</div>
			<div className="right_inner_right">
				<div className="container">
					<a href={"tel:" + Global.phoneNumberWithInd} className="item_container link">
						<i className="fas fa-phone-alt"/>
						<div className="contactview_text"><h1>{Global.phoneNumberParsed}</h1></div>
					</a>
					<a href={"tel:" + Global.housePhoneNumberWithInd} className="item_container link">
						<i className="fas fa-phone-square-alt"/>
						<div className="contactview_text"><h1>{Global.housePhoneNumberParsed}</h1></div>
					</a>
					<a href={"mailto:" + Global.mailAddress} className="item_container link">
						<i className="fas fa-at"/>
						<div className="contactview_text"><h1>{Global.mailAddress}</h1></div>
					</a>
					{!isPortrait() && <div className="item_container">
                        <i className="fas fa-map-marker-alt"/>
                        <div className="contactview_text"><h1>{Global.locationAddress}</h1></div>
                    </div>}
				</div>
			</div>
		</div>
	</div>

}
