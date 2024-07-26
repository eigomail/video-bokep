import CardList from "@/components/card-list";
import { DEFAULT_PER_PAGE } from "@/lib/constants";
import SearchCardList from "@/components/search/search-list";
import { SITENAME } from "@/lib/constants";
export default async function Home({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const page =
        (searchParams.page && parseInt(searchParams.page as string)) || 41;
    const per_page =
        (searchParams.per_page && parseInt(searchParams.per_page as string)) ||
        DEFAULT_PER_PAGE;
    const fld_id =
        (searchParams.fld_id && (searchParams.fld_id as string)) || undefined;
    const query = (searchParams.q && (searchParams.q as string)) || undefined;

    return (
        <div className="md:my-2">
            {query ? (
                <SearchCardList query={query} banner />
            ) : (
                <CardList page={page} per_page={per_page} fld_id={fld_id} />
            )}
<h1>{SITENAME}</h1><h2>Video Bokep Indo Jepang Jav Barat Simontok Viral Terbaru</h2><p>Bocil Ngentot Jilbab Smp Mama Sma korea china tante live paksa ngentot abg cewek pijat pelajar Hijab Abg Colmek Film Tante Hot Twitter Asia Download Live stw situs bokep indonesia jepang barat korea japan jav cina japanese china rusia arab india thailand nonton link sd crot playbokep simontok bokepin montok baru perawan anak kecil telegram selingkuh ojol cantik gay vidio lokal artis pelajar janda streaming hd anime hentai bokepind gudang avtub pijat sotwe rumah pemerkosaan inggris xpanas pure tobrut vcs ngintip binor remaja yandex update perselingkuhan wiki raja full com porno indoh</p>
        </div>
    );
}
