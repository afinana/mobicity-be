'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var contextSchema = new Schema(
	{
		@context: {
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
			"event-location": String
			"price": String,
			"recurrence": String,
			"days": String,
			"frequency": String,
			"interval": String,
			"audience": String
        }
	},)
var EventSchema = new Schema({

	
	"@graph": [

		{	
		  @id: String,
		  @type: String,
		  id: Number,
		  title: String,
		  description: String,
		  price: Number,
		  dtstart: String,
		  dtend: String,
		  excluded-days: String,
		  recurrence: { 
		  	days: String, 
		  	frequency: String, 
		  	interval:Number 
		  },
		  uid: String,
		  link: String,
		  event-location: String,
		  references: { 
		  	@id: String
		  },
		  relation: { 
		  	@id: String
		  },
		  address: { 
		  	district:{ 
		  		@id: String
		  	}
		  },
		  location: { latitude: Number, longitude:Number}
		}
    ]
});

module.exports = mongoose.model('Events', ThingSchema);



/*
  {
        @id: "http://datos.madrid.es/egob/catalogo/tipo/evento/10503609-115-carteles-dd-alejandro-magallane.json",
        @type: "http://datos.madrid.es/egob/kos/actividades/Exposiciones",
        id: "10503609",
        title: "115 carteles dd Alejandro Magallane",
        description: "",
        price: 1,
        dtstart: "2017-09-29 00:00:00.0",
        dtend: "2017-10-21 23:59:00.0",
        excluded-days: "",
        recurrence: {
            days: "MO,TU,WE,TH,FR,SA,SU",
            frequency: "WEEKLY",
            interval: 1
        },
        uid: "10503609",
        link: "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=1ccd566813946010VgnVCM100000dc0ca8c0RCRD&vgnextoid=adfe3e6a99cce510VgnVCM2000001f4a900aRCRD",
        event-location: "Centro Cultural Casa del Reloj (Arganzuela)",
        references: {
            @id: "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=1ccd566813946010VgnVCM100000dc0ca8c0RCRD&vgnextoid=039d3e6a99cce510VgnVCM2000001f4a900aRCRD"
        },
        relation: {
            @id: "http://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/1925-centro-cultural-casa-reloj-arganzuela-.json"
        },
        address: {
            district: {
                @id: "http://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Arganzuela"
            }
        },
        location: {
            latitude: 40.394522745106734,
            longitude: -3.7000855961559855
        }
    }
    */