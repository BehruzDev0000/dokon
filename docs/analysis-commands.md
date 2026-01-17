# Command Log

Commands run to inspect the repository for the requested code review:

```
ls
cat README.md
ls src
sed -n '1,200p' src/app.module.ts
sed -n '1,200p' src/main.ts
find src/products -type f -maxdepth 3 -print
sed -n '1,200p' src/products/entities/product.entity.ts
sed -n '1,200p' src/products/dto/create-product.dto.ts
sed -n '1,200p' src/products/dto/update-product.dto.ts
sed -n '1,200p' src/products/products.controller.ts
sed -n '1,200p' src/products/products.service.ts
find src/categories -type f -maxdepth 3 -print
sed -n '1,200p' src/categories/entities/category.entity.ts
sed -n '1,200p' src/categories/categories.service.ts
sed -n '1,200p' src/utils/handle-error.ts
sed -n '1,200p' src/utils/success.response.ts
find src/users -type f -maxdepth 3 -print
sed -n '1,200p' src/users/entities/user.entity.ts
sed -n '1,200p' src/users/users.service.ts
find src/comments -type f -maxdepth 3 -print
sed -n '1,200p' src/comments/entities/comment.entity.ts
sed -n '1,200p' src/comments/comments.service.ts
```
