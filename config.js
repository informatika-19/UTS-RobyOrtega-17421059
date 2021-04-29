const requestResponse = {
    gagal: (pesan) => {
        return {
            sukses:false,
            pesan: pesan
        }
    },
    sukses: (pesan) => {
        return {
            sukses: true,
            pesan : pesan
        }
    },
    serverError: {
        sukses: false,
        pesan: 'Terjadi kesahalan pada server'
    },
    suksesLogin:  (data) =>  {
        return {
            sukses: true,
            pesan: 'Berhasil Login',  
            data: data
        }
    },
    semuaData: (data) => {
        return {
            sukses: true,
            pesan: 'Berhasil memuat data',  
            data: data
        }  
    }
}
module.exports =  {requestResponse}