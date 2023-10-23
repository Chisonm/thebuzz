import InputError from '@/Components/InputError';
import LoadingButton from '@/Components/LoadingButton';
import Pagination from '@/Components/Pagination';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Link, Head, useForm } from '@inertiajs/react';
import toast, { Toaster } from 'react-hot-toast';

export default function Welcome({ auth, buzzs, flash }) {
    const {data, setData, post, reset, processing, errors} = useForm({
        name: '',
        email: '',
        subscribe_radio: 'no',
    })

    function capitalizeFirstLetter(value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

    const subScribe = (e) => {
        e.preventDefault()
        post(route('buzz.store'), {
            preserveScroll: true,
            onSuccess: () => {
                reset('name', 'email')
                toast.success(`${flash.message}`, {
                    duration: 4000,
                    position: 'top-left'
                })
            },
        })
    }


    return (
        <>
            <Head title="Welcome" />
            <Toaster />
            <div className="w-full py-6 bg-gray-800">
                <nav className="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-6">
                    <ul className="flex items-center justify-between">
                        <li>
                            <img src="/images/logo1.png" className="w-12 h-auto md:w-14" alt="" />
                        </li>
                        <li className="hidden md:block">
                            <div><span className="text-rose-600 text-2xl font-normal font-['Pacifico']">Emeka</span><span className="text-white text-2xl font-normal font-['Pacifico']"> Must shine, <span className="text-rose-600 text-2xl font-normal font-['Pacifico']">You</span> Must </span><span className="text-white text-2xl font-normal font-['Pacifico']">shine</span><span className="text-white text-2xl font-normal font-['Pacifico']"> too!</span></div>
                        </li>
                        <li>
                            <img src="/images/emeka1.png" className="w-12 h-auto md:w-14" alt="" />
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="w-full py-5 bg-yellow-400">
                <div className="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-6">
                    <p className="text-black text-xs md:text-base font-normal font-['Inter'] leading-normal">⚠️ Ready to join the buzz? Enter your name to shine  .𖥔 ݁˖ . You can click on yes to have it automatically downloaded on your device.</p>
                </div>
            </div>

           <div className="flex items-center justify-center w-full md:h-full">
           <div className="container px-4 mx-auto mt-5 max-w-7xl sm:px-6 lg:px-6">
                <div className="flex flex-col items-center gap-4 md:flex-row">
                    <div className="w-full p-5 pt-24 bg-white rounded-md shadow-sm md:p-8">
                        <div className="flex flex-col justify-center md:container md:max-w-5xl">
                            {/* {flash.message && (
                                <div className="px-10 py-4 mb-4 font-semibold text-left text-green-700 bg-green-200 rounded-md">
                                    {flash.message}
                                </div>
                            )} */}
                            <div className="flex flex-col gap-1">
                                <h1 className="w-full text-gray-800 text-2xl font-bold font-['Inter'] leading-normal">Join the buzz</h1>
                                <p className="w-full text-zinc-600 text-sm font-normal font-['Inter'] leading-normal">Be the first to know when the album drops.</p>
                            </div>
                            <div className=''>
                                <form onSubmit={subScribe} className="w-full mt-4">
                                    <div className="grid w-full items-center gap-1.5">
                                        <Label htmlFor="name">Name</Label>
                                        <Input value={data.name} onChange={(e) => setData('name', capitalizeFirstLetter(e.target.value))} type="text" id="name" placeholder="name" />
                                        <InputError message={errors.name} />
                                    </div>
                                    <div className="grid w-full items-center gap-1.5 mt-4">
                                        <Label htmlFor="email">Do you want to download as wallpaper?</Label>
                                        <div className="flex items-center space-x-4">
                                        <div className="flex items-center space-x-2">
                                            <input type="radio" id="no" name="subscribe_radio" value="no" className="w-4 h-4 text-yellow-400 border-gray-300 focus:ring-yellow-400" checked={data.subscribe_radio === 'no'} onChange={(e) => setData('subscribe_radio',e.target.value)} />
                                            <Label htmlFor="no">No</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <input type="radio" id="yes" name="subscribe_radio" value="yes" className="w-4 h-4 text-yellow-400 border-gray-300 focus:ring-yellow-400" checked={data.subscribe_radio === 'yes'} onChange={(e) => setData('subscribe_radio',e.target.value)} />
                                            <Label htmlFor="yes">Yes</Label>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="grid w-full items-center gap-1.5 mt-4">
                                        {data.subscribe_radio === "yes" &&
                                        (<>
                                        <Label htmlFor="email">Email</Label>
                                         <Input value={data.email}  onChange={(e) => setData('email',e.target.value)} type="email" id="email" required={data.subscribe_radio === "yes"} placeholder="email" />
                                        <InputError message={errors.email} />
                                        </>)}
                                    </div>
                                    <div className="grid w-full items-center gap-1.5 mt-4">
                                        <LoadingButton loading={processing} type="submit" size="lg" className="w-full h-11 bg-[#282834] text-white px-5 py-6 font-semibold text-center justify-center rounded-lg outline-none">Shine with me!</LoadingButton>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="w-full p-5 bg-white border-red-500 rounded-md shadow-sm md:p-8">
                        <div className='max-h-[799px] overflow-y-auto'>
                            <div className="grid h-full grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4">
                                <img src="/images/emekams.png" className="object-cover w-full h-full rounded-md"  alt="" />
                                {buzzs.data.map((buzz, index) => (
                                    <div className='w-full h-[161px] rounded-md' key={index}>
                                        <img src={buzz.image} className="object-cover w-full h-full rounded-md"  alt="" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* empty state */}
                        {buzzs.data.lenght === 0 && (<div className="flex flex-col items-center justify-center">
                            <img src="/images/mustshine.png" className="w-48 h-auto"  alt="" />
                            <p className="text-xl font-medium text-center">Be the first to join the buzz!</p>
                        </div>)}
                        <Pagination links={buzzs.links} />
                    </div>
                </div>
            </div>
           </div>
        </>
    );
}
