
export const routePage = [
	{ path: '', loadChildren: './page/page.module#HomeModule' },
	{ path: 'per-kategori', loadChildren: './page/page.module#PerkategoriModule' },
	{ path: 'detail-page', loadChildren: './page/page.module#DetailPageModule' },
];	