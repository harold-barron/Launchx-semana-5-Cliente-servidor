const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});

app.get('/explorers',async(req,res) =>
{
  const allExplorers = await prisma.nuevoexplorer.findMany({});
  res.json(allExplorers);
})

app.get('/explorers/:id',async(req,res)=>
{
  const id= req.params.id;
  const explorer = await prisma.nuevoexplorer.findUnique({where:{id: parseInt(id)}});
  res.json(explorer);
})

app.post('/explorers', async(req,res) =>
{
  const explorer = {
    name: req.body.name,
    username: req.body.username,
    mission: req.body.mission
  };
  const message = 'Explorer creado.';
  await prisma.nuevoexplorer.create({data: explorer});
  return res.json({message});
})

app.put('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.nuevoexplorer.update({
		where: {
			id: id
		},
		data: {
			mission: req.body.mission
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

app.delete('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.nuevoexplorer.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});

app.get('/newParams', async(req,res) =>{
  const allNewExplorers = await prisma.parameters.findMany({});
  return res.json(allNewExplorers);
})

app.get('/newParams/:id', async(req,res) =>{
  const id = parseInt(req.params.id);
  const explorerWithID = await prisma.parameters.findUnique({where:{id:id}});
  return res.json(explorerWithID)
})

app.post('/newParams', async(req,res) =>{
  const newParams={
    name: req.body.name,
    lang: req.body.lang,
    missionComander: req.body.missionComander,
    enrollments: req.body.enrollments,
    hasCertification: req.body.hasCertification
  };
  const message = 'Explorer creado.';
  await prisma.parameters.create({data: newParams});
  return res.json({message});
})

app.put('/newParams/:id', async(req,res)=>{
  const id = parseInt(req.params.id);

  await prisma.parameters.update({
    where:{
      id:id
    },
    data:{
      missionComander: req.body.missionComander
    }
  })
  return res.json({message: "Mission Comander actualizado"});
})
 app.delete('/newParams/:id', async(req,res)=>{
    id = parseInt(req.params.id);
    await prisma.parameters.delete({where: {id:id}});
    return res.json({message: "Explorer eliminado"});

 })