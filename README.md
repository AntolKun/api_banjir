## tutorial pemasangan project

pastikan untuk menjalankan Apache dan Mysql terlebih dahulu pada XAMPP.

1. lakukan clone pada repository github berikut :

```sh
git clone https://github.com/MuhammadWiman/project_siPajar.git
```

2. select directory project :

```sh
cd project_siPajar
```

3. install library :

```sh
npm install
```

4. migrasi dan generate database :

```sh
npx prisma migrate dev --name init //optional
npx prisma generate
```

5. terakhir running program :

```sh
nodemon app.js
```

## API GET data Sensor

API dapat di request melalui postman ataupun program FrontEnd

```sh
http://localhost:3000/sensor/output
```
