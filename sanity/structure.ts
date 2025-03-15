import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
	S.list()
		.title('Content')
		.items([
			S.adocumentTypeListItem('author').title('Authors'),
			S.adocumentTypeListItem('startup').title('Startupss'),
		]);
