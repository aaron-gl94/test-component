
const getData = () => {
    fetch('https://api.datos.gob.mx/v2/Releases_SFP')
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Error en la petición");
        }
    })
    .then(response => {
        console.log(response.results[0]);
        let data = response.results;

        /* data.forEach(element => {

            element._id,
            element.publisher.forEach(publisher => {
                publisher.uid,
                publisher.name,
                publisher.uri,
            }),
            element.cycle;
            element.ocid;
            element.id;
            element.date;
            element.tag.forEach((tag, index) => {
                tag
            });
            element.initiationType;
            element.parties.forEach((index, party) => {
                party
            });

            element.buyer.forEach(buyer => {
                buyer.name,
                buyer.id
            });

            element.tender.forEach(tender => {
                
                tender.id,
                tender.title,
                tender.description,
                tender.status,
                tender.procuringEntity,
                tender.items,
                tender.value,
                tender.procurementMethod,
                tender.procurementMethodRationale,
                tender.submissionMethod,
                tender.tenderPeriod,
                tender.enquiryPeriod,
                tender.hasEnquiries,
                tender.awardPeriod
            });

            element.language,
            element.awards,
            element.contracts
        }); */
    })
}


getData();