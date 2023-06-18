import prisma from ".";

export async function getUser(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    return { user };
  } catch (error) {
    const typedError = error as Error;
    return { error: typedError };
  }
}

export async function addCountry(email: string, country: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
    });
    if (!user) {
      throw new Error("User not found!");
    }
    const updatedCountries = [...user.countriesVisited, country];
    const updatedUser = await prisma.user.update({
      where: { email: email },
      data: {
        countriesVisited: updatedCountries,
      },
    });
    return { user: updatedUser };
  } catch (error) {
    const typedError = error as Error;
    return { error: typedError };
  }
}

export async function removeCountry(email: string, country: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
    });
    if (!user) {
      throw new Error("User not found!");
    }
    const updatedCountries = user.countriesVisited.filter((c) => c != country);
    const updatedUser = await prisma.user.update({
      where: { email: email },
      data: {
        countriesVisited: updatedCountries,
      },
    });
    return { user: updatedUser };
  } catch (error) {
    const typedError = error as Error;
    return { error: typedError };
  }
}
