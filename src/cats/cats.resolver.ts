import { Resolver,Query, Mutation, Args } from "@nestjs/graphql";
import { CatsService  } from './cats.service'
import { CatType, CatInput } from "./cats.schema";

@Resolver()
export class catsResolver {
  constructor(
    private readonly catsService: CatsService,
  ) {}

  @Query(() => String)
  async hello(): Promise<any> {
    return 'hello';
  }

  @Query(() => [CatType])
  async cats(): Promise<any> {
    return this.catsService.findAll();
  }

  @Mutation(() => CatType)  
  async createCat(@Args('input') input: CatInput): Promise<any> {
    return this.catsService.create(input);
  }
}