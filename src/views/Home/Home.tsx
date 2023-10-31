import { TitleComponent } from '@/components';
import { CarouselHome } from '..';
import {
	IconAire,
	IconBar,
	IconBreakfast,
	IconJardin,
	IconParking,
	IconPep,
	IconPiscina,
	IconRestaurant,
	IconRoom,
} from '@/icons';
import { Fade } from 'react-awesome-reveal';

export const Home = () => {
	return (
		<>
			<CarouselHome />
			<div className='container md:mx-auto px-3 py-8'>
				<section className='py-4'>
					<p className='text-lg md:text-xl mb-4'>
						Las CABAÑAS BAHIA AZUL se encuentran en Tolú, a 300 metros de las
						playas de Tolú, y ofrecen alojamiento con piscina al aire libre,
						aparcamiento privado gratuito, jardín y restaurante. El
						establecimiento alberga un bar y se encuentra a 1,9 km de la playa
						de La Perdiz. El hotel ofrece habitaciones familiares.
					</p>
					<p className='text-lg md:text-xl mb-4'>
						Todas las habitaciones incluyen aire acondicionado y TV de pantalla
						plana.
					</p>
					<p className='text-lg md:text-xl mb-4'>
						Las CABAÑAS BAHIA AZUL sirven un desayuno americano.
					</p>
					<p className='text-lg md:text-xl mb-4'>
						La playa El Frances está a 2,7 km. El aeropuerto más cercano es el
						de Corozal, ubicado a 56 km de las CABAÑAS BAHIA AZUL.
					</p>
				</section>
				<section className='py-4'>
					<TitleComponent title='Servicios' />
					<div className='flex flex-wrap gap-x-6 gap-y-6'>
						<Fade>
							<p className='flex items-center gap-x-2'>
								<IconPiscina /> Piscina al aire libre
							</p>
						</Fade>
						<Fade>
							<p className='flex items-center gap-x-2'>
								<IconAire /> Aire acondicionado
							</p>
						</Fade>
						<Fade>
							<p className='flex items-center gap-x-2'>
								<IconJardin /> Jardín
							</p>
						</Fade>
						<Fade>
							<p className='flex items-center gap-x-2'>
								<IconPep /> Admite mascotas
							</p>
						</Fade>
						<Fade>
							<p className='flex items-center gap-x-2'>
								<IconRoom /> Habitaciones familiares
							</p>
						</Fade>
						<Fade>
							<p className='flex items-center gap-x-2'>
								<IconBreakfast /> Desayuno
							</p>
						</Fade>
						<Fade>
							<p className='flex items-center gap-x-2'>
								<IconRestaurant /> Restaurantes
							</p>
						</Fade>
						<Fade>
							<p className='flex items-center gap-x-2'>
								<IconParking /> Parking gratis
							</p>
						</Fade>
						<Fade>
							<p className='flex items-center gap-x-2'>
								<IconBar /> Bar
							</p>
						</Fade>
					</div>
				</section>
				<section className='py-4'>
					<TitleComponent title='Ubicación' />
					<p className='text-lg md:text-xl mb-4 normal-case'>
						EL HOTEL VALLE AZUL SE ENCUENTRA UBICADO EN EL MUNICIPIO DE SANTIAGO
						DE TOLÚ CUÁL SE PUEDE LLEGAR TOMANDO UNA MOTO HACIA LA ZONA DE PALO
						BLANCO PLAYA DÓNDE SE PUEDEN APRECIAR DE UNAS HERMOSAS PLAYAS Y
						LIMPIAS DONDE SE PUEDE DISFRUTAR DEL SILENCIO Y LA PAZ DE ESTE BELLO
						LUGAR. EN EL HOTEL BAHÍA AZUL SE PUEDEN REALIZAR MUCHAS ACTIVIDADES
						ADEMÁS DE SUS HERMOSAS PLAYAS COMO LO SON DISFRUTAR DE LA PISCINA,
						CAMINAR EN LA TARDE POR LA PLAYA APRECIANDO EL ATARDECER, EN SUS
						PLAYAS SE PUEDEN REALIZAR ACTIVIDADES COMO VOLEIBOL DISFRUTAR DE UNA
						BUENA GASTRONOMÍA EN EL HOTEL, REALIZACIÓN DE BODAS AL FRENTE DE LA
						PLAYA, FIESTAS DE CUMPLEAÑOS ENTRE OTRAS MARAVILLOSAS ACTIVIDADES.
					</p>
					<div className='w-full'>
						<img src='/images/mapa.jpeg' alt='' className='w-full' />
					</div>
				</section>
			</div>
		</>
	);
};
