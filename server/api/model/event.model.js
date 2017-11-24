'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var contextSchema = new Schema({

	"c": String,
	"dcterms": String,
	"geo": String,
	"loc": String,
	"org": String,
	"vcard": String,
	"title": String,
	"id": String,
	"relation": String,
	"references": String,
	"address": String,
	"area": String,
	"district": String,
	"locality": String,
	"postal-code": String,
	"street": String,
	"location": String,
	"latitude": String,
	"longitude": String,
	"organization": String,
	"organization-desc": String,
	"accesibility": String,
	"services": String,
	"schedule": String,
	"organization-name": String,
	"description": String,
	"link": String,
	"uid": String,
	"dtstart": String,
	"dtend": String,
	"excluded-days": String,
	"event-location": String,
	"price": String,
	"recurrence": String,
	"days": String,
	"frequency": String,
	"interval": String,
	"audience": String

});

var EventSchema = new Schema({

  "@id": String,
  "@type": String,
  "id": Number,
  "title": String,
  "description": String,
  "price": Number,
  "dtstart": String,
  "dtend": String,
  "excluded-days": String,
  "recurrence": { 
  	"days": String, 
  	"frequency": String, 
  	"interval":Number 
  },
  "uid": String,
  "link": String,
  "event-location": String,
  "references": { 
  	"@id": String
  },
  "relation": { 
  	"@id": String
  },
  "address": { 
  	"district":{ 
  		"@id": String
  	}
  },
  "location": { "latitude": Number, "longitude": Number}

});

module.exports = mongoose.model('Events', EventSchema);



/*
 {
	"@context": {
		"c": "http"://www.w3.org/2002/12/cal#",
		"dcterms": "http"://purl.org/dc/terms/",
		"geo": "http"://www.w3.org/2003/01/geo/wgs84_pos#",
		"loc": "http"://purl.org/ctic/infraestructuras/localizacion#",
		"org": "http"://purl.org/ctic/infraestructuras/organizacion#",
		"vcard": "http"://www.w3.org/2006/vcard/ns#",
		"title": "vcard":fn",
		"id": "dcterms":identifier",
		"relation": "dcterms":relation",
		"references": "dcterms":references",
		"address": "vcard":adr",
		"area": "loc":barrio",
		"district": "loc":distrito",
		"locality": "vcard":locality",
		"postal-code": "vcard":postal-code",
		"street": "vcard":street-address",
		"location": "vcard":geo",
		"latitude": "geo":lat",
		"longitude": "geo":long",
		"organization": "vcard":org",
		"organization-desc": "dcterms":description",
		"accesibility": "org":edificioaccesible",
		"services": "org":servicios",
		"schedule": "org":horario",
		"organization-name": "vcard":organization-name",
		"description": "c":summary",
		"link": "c":url",
		"uid": "c":uid",
		"dtstart": "c":dtstart",
		"dtend": "c":dtend",
		"excluded-days": "c":exdate",
		"event-location": "c":location",
		"price": "c":resource",
		"recurrence": "c":rrule",
		"days": "c":byday",
		"frequency": "c":freq",
		"interval": "c":interval",
		"audience": "dc":audience"
	},
	"@graph": [
	
	{
		"@id": "http"://datos.madrid.es/egob/catalogo/tipo/evento/10444961-10-11-ximena-sergio.json",
		"@type": "http"://datos.madrid.es/egob/kos/actividades/Exposiciones",
		"id": "10444961",
		"title": "10 y 11. Ximena y Sergio",
		"description": ",
		"price": 1,
		"dtstart": "2017-09-08 00":00":00.0",
		"dtend": "2018-02-25 23":59":00.0",
		"excluded-days": ",
		"recurrence": {
			"days": "FR,SA,SU",
			"frequency": "WEEKLY",
			"interval": 1
		},
		"uid": "10444961",
		"link": "http"://www.madrid.es/sites/v/index.jsp?vgnextchannel=1ccd566813946010VgnVCM100000dc0ca8c0RCRD&vgnextoid=f58782706346d510VgnVCM2000001f4a900aRCRD",
		"event-location": "Naves Matadero. Centro Internacional Artes Vivas",
		"references": {
			"@id": "http"://www.madrid.es/sites/v/index.jsp?vgnextchannel=1ccd566813946010VgnVCM100000dc0ca8c0RCRD&vgnextoid=62f582706346d510VgnVCM2000001f4a900aRCRD"
		},
								
			"relation": {
				"@id": "http"://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/6963121-naves-matadero-centro-internacional-artes-vivas.json"
			},
			
				"address": {
					"district": {
						"@id": "http"://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Arganzuela"
					}		
				},
			"location": {
				"latitude": 40.39241374953321,
				"longitude": -3.697247685884226
			}
							
	},
    */