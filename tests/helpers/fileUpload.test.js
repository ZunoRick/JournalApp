import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
  cloud_name: 'dumnirr95',
  api_key: '148986173935229',
  api_secret: 'WF6I4GrkmKgw6JIgGh7Z8ZjPF5E',
  secure: true
})

describe('pruebas en fileUpload', () => {
  test('debe de subir el archivo correctamente a cloudinary', async() => {
    const imageUrl = 'https://imgs.search.brave.com/Y-C8ijx_t7GRhVVpUOHdd4YdASYY_yjxoZN7btRlbUU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzM3LzkyLzY1/LzM2MF9GXzUzNzky/NjU4OF9jc3JWYXc2/TTVEWWxtWFZwaXo1/UWdzRGc4eHBBSHc1/ay5qcGc'
    const resp = await fetch(imageUrl)
    const blob = await  resp.blob()
    const file = new File([blob], 'foto.jpg')

    const url = await fileUpload(file)
    console.log(url);
    expect( typeof url ).toBe('string')

    const segments = url.split('/')
    const imageId = segments[segments.length - 1].replace('.jpg', '')

    const cloudResp = await cloudinary.api.delete_resources([ 'journal/' + imageId ], {
      resource_type: 'image'
    })
    
    // console.log(cloudResp);
  })

  test('debe de retornar null', async() => {
    const file = new File([], 'foto.jpg')
    const url = await fileUpload(file)

    expect( url ).toBe(null)
  })
});