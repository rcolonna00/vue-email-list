var app = new Vue(
    {
        el: '#root',
        data: {
            emails:[ ],
            numeroEmail: 10
        },
        methods: {

        },
        mounted () {

            for ( let i = 0; i < this.numeroEmail; i++ ) {

                axios
                .get( 'https://flynn.boolean.careers/exercises/api/random/mail' )
                .then(( response ) => {
                
                    const result = response.data;                
                    console.log( result.response )

                    this.emails.push(result.response)

                    // un altro modo per far comparire tutto il blocco e non una riga alla volta
                    // e quello di creare al inizio del for un array vuoto da popolare volta per 
                    // volta con ogni elemento, quando questa array ha raggiunto la lunghezza
                    // necessaria lo pusho tutto nel primo array fuori che scrivo nel html
                });

            }
            
        }
    }
)
